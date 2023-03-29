import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentoneComponent} from './componentone/componentone.component';
import {ComponenttwoComponent} from './componenttwo/componenttwo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ComponentoneComponent,
    ComponenttwoComponent
  ],
  exports:[
    ComponentoneComponent,
    ComponenttwoComponent
  ]
})
export class ModuleoneModule { }