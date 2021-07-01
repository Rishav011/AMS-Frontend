import { Component, OnInit } from '@angular/core';
import { IAssetDetail } from "../asset-detail";
import { AssetDetailService } from '../asset-detail.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = [
    'projectName',
    'assetCategory',
    'manufacturer',
    'assetName',
    'description',
    'mlfb',
    'workingCondition',
    'remark',
    "actions"
  ];
  dataSource: IAssetDetail[]=[];
  constructor(private _assetDetailService:AssetDetailService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon(
      'upload',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/upload.svg'));
    iconRegistry.addSvgIcon(
      'download',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/download.svg'));
    iconRegistry.addSvgIcon(
      'plus',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/plus.svg'));
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/search.svg'));
  }

  ngOnInit(): void {
    this._assetDetailService.getAssetData().subscribe((data) => {
      this.dataSource = data;
      console.log(this.dataSource);
    });
    
  }
}
