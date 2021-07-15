import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-upload-status',
  templateUrl: './dialog-upload-status.component.html',
  styleUrls: ['./dialog-upload-status.component.scss']
})
export class DialogUploadStatusComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}
