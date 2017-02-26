import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'comp-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5; 
    }

    onClick(): void {
        this.ratingClicked.emit('The rating was clicked ' +this.rating);
    }
}