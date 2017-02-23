import { Component } from '@angular/core';
import {Logger} from 'angular2-logger/core'

@Component({
    templateUrl: 'app/home/welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';

     constructor( private _logger: Logger )
    {
        this._logger.info('in WelcomeComponent');
    }
}
