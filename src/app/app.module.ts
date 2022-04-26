import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CsvLoaderService} from "./service/csv-loader/csv-loader.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    CsvLoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
