import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebService } from '../../services/web.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home.component';


@NgModule({
    declarations: [
      PanelComponent,
      HomeComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      FormsModule,
    ],
    exports: [
      PanelComponent,
      HomeComponent
    ],
    providers:[
      WebService
    ]
  })
  export class HomeModule { }
  