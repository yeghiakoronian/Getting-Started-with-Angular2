import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component'

import {LoggerAppComponent} from './logging/logger-app.component'
import { Logger } from "angular2-logger/core";
import {LoggerService} from './logging/logger-service';
import {ProductFilterPipe} from './products/product-filter.pipe';
import {StarComponent} from './shared/star.component';

@NgModule({
  imports: [
     BrowserModule,
     FormsModule
  ],
  declarations: [ 
    AppComponent,
    ProductListComponent ,
    LoggerAppComponent,
    ProductFilterPipe,
    StarComponent
  ],
  providers: [ 
    LoggerService,
    Logger 
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
