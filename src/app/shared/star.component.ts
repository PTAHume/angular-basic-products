import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export default class StarComponent implements OnChanges {
  @Input() rating: number = 4;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  cropWidth = 75;
  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = (this.rating * 75) / 5;
  }
  onClick(): void {
    this.change.emit(this.rating);
  }
}
