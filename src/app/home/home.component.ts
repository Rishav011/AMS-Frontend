import { Component, OnInit } from '@angular/core';

import { AssetDetailService } from '../asset-detail.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['projectName',
    'assetCategory',
    'manufacturer',
    'assetName',
    'description',
    'mlfb',
    'workingCondition',
    'remark' 
  ];
  dataSource:any=[];
  constructor(private _assetDetailService:AssetDetailService) { 
    
  }

  ngOnInit(): void {
     this._assetDetailService.getAssetData().subscribe(data => this.dataSource=data);
    
  }
}
