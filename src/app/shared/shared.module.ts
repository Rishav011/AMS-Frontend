import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from './material/material.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    imports: [
      CommonModule,
      MatModule,
      TranslateModule,
    ],
    exports: [
      MatModule,
      TranslateModule,
    ]
  }) 
  export class SharedModule { }
