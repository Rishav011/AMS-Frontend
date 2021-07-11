import { Component, OnInit, ViewChild } from "@angular/core";
import { IAssetDetail } from "../asset-detail";
import { AssetDetailService } from "../asset-detail.service";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {

selectedFile=null;

  displayedColumns: string[] = [
    "projectName",
    "category",
    "manufacturer",
    "name",
    "description",
    "mlfb",
    "workingCondition",
    "remarks",
    "actions",
  ];

  rowId: string = "";
  dataSource:MatTableDataSource<IAssetDetail>= new MatTableDataSource();
  elementData:IAssetDetail[]=[];

  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild('paginator') paginator!:MatPaginator;

  constructor(
    private _assetDetailService: AssetDetailService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this._assetDetailService.getAssetData().subscribe((data) => {
      this.elementData = data;
      this.dataSource.data =this.elementData;
      // console.log(this.dataSource);
    });
  }
  ngAfterViewInit(){
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  }
  getId(data: string) {
    this.rowId = data;
    // console.log(this.rowId);
  }
  goToForms() {
    this.router.navigate(["/asset-form", { id: this.rowId }]);
  }

onFileSelected(event)
{
  console.log(event);
  this.selectedFile=event.target.files[0];
  console.log(this.selectedFile); 
  this._assetDetailService.postExcelData(this.selectedFile).subscribe((data)=>console.log("Success!",data));
}
}
