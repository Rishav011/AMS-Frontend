import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-details-form',
  templateUrl: './asset-details-form.component.html',
  styleUrls: ['./asset-details-form.component.scss']
})
export class AssetDetailsFormComponent implements OnInit {

  maxDate:Date
  constructor() { 
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
 
    this.maxDate = new Date(currentYear,currentMonth,currentDate);
  }

  ngOnInit(): void {
  }

}
