import { Component, OnInit } from '@angular/core';
import { IAssetDetail } from "../asset-detail";
import { AssetDetailService } from '../asset-detail.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
  displayedColumns: string[] = [
    'projectName',
    'category',
    'manufacturer',
    'name',
    'description',
    'mlfb',
    'workingCondition',
    'remarks',
    "actions"
  ];

  rowId:string="";
  dataSource: IAssetDetail[]=[];
  constructor(private _assetDetailService:AssetDetailService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private router:Router) { 
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
  getId(data:string){
    this.rowId = data;
    // console.log(this.rowId);
  }
  goToForms(){
    this.router.navigate(['/asset-form',{id:this.rowId}]);
  }
}
