import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  @Input()
  rating: number
  starWidth: number;

  @Output()
  ratingClicked = new EventEmitter<string>();

  constructor() {
    this.rating = 0;
    this.starWidth = this.rating * 86 / 5;
  }
  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit("" + this.rating);
  }

}
