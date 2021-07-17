import { Component, OnInit } from '@angular/core';
import { AssetDetailService } from '../asset-detail.service';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogUploadStatusComponent } from '../dialog-upload-status/dialog-upload-status.component';

@Component({
  selector: 'app-dialog-upload',
  templateUrl: './dialog-upload.component.html',
  styleUrls: ['./dialog-upload.component.scss']
})
export class DialogUploadComponent implements OnInit {

  succ:boolean=false;
  fileName:any;
  showSpinner=false;

  constructor(private _assetDetailService: AssetDetailService,public dialog:MatDialog,public dialogRef: MatDialogRef<DialogUploadComponent>) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(DialogUploadStatusComponent,{data:{succ:this.succ,fileName:this.fileName}});
  }

  onFileSelected(event:any)
{
  this.showSpinner=true;
  const selectedFile=event.target.files[0];
  const formData = new FormData();
  formData.append('formFile',selectedFile);
  console.log(selectedFile);
  this.fileName=selectedFile.name;
  console.log(this.fileName); 
  this._assetDetailService.postExcelData(formData).subscribe((data)=>{console.log("Success!");this.succ=true;this.showSpinner=false;this.openDialog();},(error)=>{console.log(error);this.showSpinner=false;this.openDialog();});
  
  //for importing same file twice
  //this.myFileInput.nativeElement.value='';
}
closeDialog() {
  this.dialogRef.close(this.succ);
}

}
