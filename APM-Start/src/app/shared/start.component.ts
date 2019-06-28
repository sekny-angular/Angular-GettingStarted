import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StartComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    };
    @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();
    onClick(): void {
        this.ratingClicked.emit(`Item Clicked ${this.rating}`);
    }
}
