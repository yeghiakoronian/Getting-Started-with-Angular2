import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component'

import { Logger } from "angular2-logger/core";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
                  AppComponent,
                  ProductListComponent 
                ],
  bootstrap: [ AppComponent ],
  providers: [ Logger ]
})
export class AppModule { }
