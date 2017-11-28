import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { PapaParseModule } from 'ngx-papaparse';

import { AppComponent } from './app.component';
import { CsvService } from './services/csv.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  	HttpModule,
  	PapaParseModule,
    BrowserModule
  ],
  providers: [CsvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
