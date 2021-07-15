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

  done:boolean=false;

  constructor(private _assetDetailService: AssetDetailService,public dialog:MatDialog,public dialogRef: MatDialogRef<DialogUploadComponent>) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(DialogUploadStatusComponent,{data:{done:this.done}});
  }

  onFileSelected(event:any)
{
  const selectedFile=event.target.files[0];
  const formData = new FormData();
  formData.append('formFile',selectedFile);
  console.log(selectedFile); 
  this._assetDetailService.postExcelData(formData).subscribe((data)=>{console.log("Success!");this.done=true;},(error)=>console.log(error));
  //for importing same file twice
  //this.myFileInput.nativeElement.value='';
  this.openDialog();
}
closeDialog() {
  this.dialogRef.close(this.done);
}

}
