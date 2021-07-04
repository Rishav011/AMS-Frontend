import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssetDetailService } from '../asset-detail.service';
import { FormData } from '../form-data';
@Component({
  selector: 'app-asset-details-form',
  templateUrl: './asset-details-form.component.html',
  styleUrls: ['./asset-details-form.component.scss']
})
export class AssetDetailsFormComponent implements OnInit {

  currentDate:Date=new Date();
  formDataModel = new FormData("","","","","","","","","","","","","","","",0,"","");
  
  maxDate:Date;
  constructor(private route:ActivatedRoute,private _assetDetailService:AssetDetailService ) { 
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
 
    this.maxDate = new Date(currentYear,currentMonth,currentDate);
  }



  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    // console.log(id);
    if(id!=null)
    this._assetDetailService.getSingleAssetData(id).subscribe(data=>this.formDataModel=data);
   
    

  }

}
