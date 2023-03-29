import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentthreeComponent } from './componentthree/componentthree.component';
import { ComponentfourComponent } from './componentfour/componentfour.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ComponentthreeComponent,
    ComponentfourComponent
  ],
  exports:[
    ComponentthreeComponent,
    ComponentfourComponent
  ]
})
export class ModuletwoModule { }