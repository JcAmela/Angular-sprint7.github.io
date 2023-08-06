import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebService } from '../services/web.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';



@NgModule({
    declarations: [
      PanelComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
    ],
    exports: [
      PanelComponent
    ],
    providers:[
      WebService
    ]
  })
  export class HomeModule { }
  