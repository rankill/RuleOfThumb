import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ThumbType} from '@shared/enums/common.enum';

@Component({
  selector: 'app-thumbs-action',
  templateUrl: './thumbs-action.component.html',
  styleUrls: ['./thumbs-action.component.scss']
})
export class ThumbsActionComponent implements OnInit {
  @Output() selected = new EventEmitter<ThumbType>();
  @Input() thumbSelected: ThumbType;

  public ThumbType = ThumbType;

  constructor() { }

  ngOnInit(): void {
  }

  activeVote(thumbType) {
    this.thumbSelected = thumbType;
    this.selected.emit(this.thumbSelected);
  }
}
