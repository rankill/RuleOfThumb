import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Thumbs} from '@shared/models/post.model';

@Component({
  selector: 'app-thumbs-bar',
  templateUrl: './thumbs-bar.component.html',
  styleUrls: ['./thumbs-bar.component.scss']
})
export class ThumbsBarComponent implements OnInit, OnChanges {
  @Input() readyOnly = true;
  @Input() thumbs: Thumbs;

  percentageObj = {
    up: 0,
    down: 0,
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.thumbs && changes.thumbs.currentValue) {
      this.fillPercentages('up');
      this.fillPercentages('down');
    }
  }

  fillPercentages(type) {
    this.percentageObj[type] = this.calcPercentage(this.thumbs[type]).toFixed(0);
  }

  calcPercentage(value) {
    return (value * 100) / this.thumbs.total;
  }
}
