import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component'

import {LoggerAppComponent} from './test/logger-app.component'

import { Logger } from "angular2-logger/core";
import {LoggerService} from './logger-service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
                  AppComponent,
                  ProductListComponent ,
                  LoggerAppComponent
                ],
  bootstrap: [ AppComponent ],
  providers: [ LoggerService,Logger ]
})
export class AppModule { }
