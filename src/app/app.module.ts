import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontResizeComponent } from './font-resize/font-resize.component';
import {PetInfoComponent} from './petinfo/petinfo.component';
import { CalculatorComponent } from './calculator/calculator.component';


@NgModule({
  declarations: [
  AppComponent,
  FontResizeComponent,
  PetInfoComponent,
  CalculatorComponent
  ],
  imports: [
  FormsModule,
  BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
