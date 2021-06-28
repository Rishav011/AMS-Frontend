import { NgModule} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatInputModule} from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatSidenavModule,
    MatSelectModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule,
    TextFieldModule,
    MatInputModule,
    MatSortModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatSidenavModule,
    MatSelectModule,
    MatTooltipModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule,
    TextFieldModule,
    MatInputModule,
    MatSortModule
  ]
})
export class MatModule { }
