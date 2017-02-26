import { Component } from '@angular/core';
import {Logger} from 'angular2-logger/core';
import {LoggerService} from './logging/logger-service';

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <h1>{{pageTitle}}</h1>
            <pm-products></pm-products>
            <logger-app></logger-app>
        </div>
    `
})
export class AppComponent { 
    pageTitle: string = 'Yeghia Product Management';

    constructor( private _logger: Logger ){}

}
