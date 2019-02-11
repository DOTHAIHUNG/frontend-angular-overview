import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontResizeComponent } from './font-resize/font-resize.component';
import {PetInfoComponent} from './petinfo/petinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    FontResizeComponent,
    PetInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
