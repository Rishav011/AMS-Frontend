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
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Projects',
    },
  ];

  displayedColumns: string[] = ['projectName',
    'category',
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
