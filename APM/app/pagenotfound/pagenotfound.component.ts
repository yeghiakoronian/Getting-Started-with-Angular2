import { Component } from '@angular/core';


@Component({
    template: `
       <div class= 'panel panel-primary'>
            <div class = 'panel-heading'>
                {{pageTitle}}
            </div>
       </div>
        <div class = 'panel-body'>
            Error 404 Page not Found
        </div>
    `
})
   
export class PageNotFoundComponent { 
    pageTitle: string = 'Yeghia Product Management';
}