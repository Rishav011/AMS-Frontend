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
  @ViewChild('fileInput') myFileInput;

  constructor(
    private _assetDetailService: AssetDetailService,
    private router: Router
  ) {}

  makeSubscription(){
    this._assetDetailService.getAssetData().subscribe((data) => {
      this.elementData = data;
      this.dataSource.data =this.elementData;
      // console.log(this.dataSource);
    });
  }
  ngOnInit(): void {
   this.makeSubscription();
  }
  ngAfterViewInit(){
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  }
  refresh(){
   this.makeSubscription()
  }
  getId(data: string) {
    this.rowId = data;
    // console.log(this.rowId);
  }
  goToForms() {
    this.router.navigate(["/asset-form", { id: this.rowId }]);
  }

onFileSelected(event:any)
{
  const selectedFile=event.target.files[0];
  const formData = new FormData();
  formData.append('formFile',selectedFile);
  // console.log(selectedFile); 
  this._assetDetailService.postExcelData(formData).subscribe((data)=>{console.log("Success!");this.refresh()},(error)=>console.log(error));
  //for importing same file twice
  this.myFileInput.nativeElement.value='';
}

deleteAllAssets(){
  this._assetDetailService.deleteAllAssets().subscribe((data)=>this.refresh());
}
}
