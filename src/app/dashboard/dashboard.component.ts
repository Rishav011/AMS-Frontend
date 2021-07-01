import { Component, OnInit } from '@angular/core';
import { AssetDetailService } from '../asset-detail.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['projectName',
    'assetCategory',
    'manufacturer',
    'description',
    'workingCondition',
  ];
  dataSource:any=[];

  constructor(private _assetDetailService:AssetDetailService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'group2',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/asset.svg'));
    iconRegistry.addSvgIcon(
      'ok',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/ok-filled.svg'));
    iconRegistry.addSvgIcon(
      'folder',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/folder-filled.svg'));
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/search.svg'));
  }

  ngOnInit(): void {
    this._assetDetailService.getAssetData().subscribe(data => this.dataSource=data);
  }

}
