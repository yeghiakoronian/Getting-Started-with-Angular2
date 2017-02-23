import { Component } from '@angular/core';
import {Logger} from 'angular2-logger/core'


@Component({
    selector: 'pm-app',
    template: `
        <div>
            <h1>{{pageTitle}}</h1>
            <pm-products></pm-products>
        </div>
    `
})
export class AppComponent { 
    pageTitle: string = 'Yeghia Product Management';

    constructor( private _logger: Logger )
    {
        this._logger.info('in AppComponent');
    }
}
