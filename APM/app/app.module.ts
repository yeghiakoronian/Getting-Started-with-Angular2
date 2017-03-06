import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {WelcomeComponent} from './home/welcome.component';
import {ProductDetailComponent} from './products/product-detail.component';
import {LoggerAppComponent} from './logging/logger-app.component';
import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component';

import { Logger } from "angular2-logger/core";
import {LoggerService} from './logging/logger-service';
import {ProductFilterPipe} from './products/product-filter.pipe';
import {StarComponent} from './shared/star.component';
import {ProductDetailGuard} from './products/product-guard.service';


@NgModule({
  imports: [
     BrowserModule,
     FormsModule,
     HttpModule,
     RouterModule.forRoot([
                  {path:'products', component:ProductListComponent},
                  {path:'product/:id',
                    canActivate: [ProductDetailGuard],
                    component:ProductDetailComponent},
                  {path:'welcome', component: WelcomeComponent},
                  {path:'', redirectTo: 'welcome', pathMatch: 'full'},
                  {path:'**', component: PageNotFoundComponent}
                  //{path: '**', redirectTo:'welcome', pathMatch: 'full'}
     ])
  ],
  declarations: [ 
    AppComponent,
    ProductListComponent ,
    LoggerAppComponent,
    ProductFilterPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent,
    PageNotFoundComponent
  ],
  providers: [ 
    LoggerService,
    Logger,
    ProductDetailGuard 
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
