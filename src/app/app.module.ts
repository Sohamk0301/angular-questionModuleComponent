import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ModuleoneModule } from './moduleone/moduleone.module';
import { ModuletwoModule } from './moduletwo/moduletwo.module';



@NgModule({
  imports:      [ BrowserModule, FormsModule, ModuleoneModule,ModuletwoModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
