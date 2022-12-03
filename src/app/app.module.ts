import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
   

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Table3Component } from './table3/table3.component';

import { TxtsearchComponent } from './txtsearch/txtsearch.component';



@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, NgbModule],
  declarations: [AppComponent, HelloComponent,Table3Component,TxtsearchComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
