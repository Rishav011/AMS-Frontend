import { Component, OnInit } from '@angular/core';
import { AssetDetailService } from '../asset-detail.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { ChartType ,ChartOptions,ChartDataSets} from 'chart.js';
import { MultiDataSet,Label } from 'ng2-charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public doughnutChartManufactureLabels:Label[]=['Siemnes','Others'];
  public doughnutChartManufactureData:MultiDataSet=[
    [50,30],
    
  ];
  public doughnutChartManufactureType:ChartType='doughnut';

  public doughnutChartAssetLabels:Label[]=['Hardware','Software'];
  public doughnutChartAssetData:MultiDataSet=[
    [50,30],
    
  ];
  public doughnutChartAssetType:ChartType='doughnut';

  public BubChartProjectOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 30,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 30,
        }
      }]
    }
  };
  
  
  public BubChartProjectType: ChartType = 'bubble';
  public BubChartProjectLegend = true;
  
  public BubChartProjectData: ChartDataSets[] = [
    {
      data: [
        { x: 1, y: 10, r: 10 },
        { x: 2, y: 15, r: 15 },
        { x: 3, y: 23, r: 23 },
        { x: 4, y: 8, r: 8 },
        { x: 5, y: 25, r: 25 },
        { x: 6, y: 9, r: 9 },
        { x: 7, y: 6, r: 6},
        { x: 8, y: 10, r: 10 },
        { x: 9, y: 15, r: 15 },
        { x: 10, y: 23, r: 23 },
        { x: 11, y: 8, r: 8 },
        { x: 12, y: 25, r: 25 },
        { x: 13, y: 9, r: 9 },
        { x: 14, y: 6, r: 6},
        { x: 15, y: 30, r: 30},
      ],
      label: 'Projects',
    },
  ];

  displayedColumns: string[] = ['projectName',
    'category',
    'name',
    'description',
    'mlfb',
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
   
  }

  ngOnInit(): void {
    this._assetDetailService.getAssetData().subscribe(data => this.dataSource=data);
  }

}
