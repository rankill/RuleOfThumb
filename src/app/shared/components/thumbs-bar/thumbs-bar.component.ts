import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-thumbs-bar',
  templateUrl: './thumbs-bar.component.html',
  styleUrls: ['./thumbs-bar.component.scss']
})
export class ThumbsBarComponent implements OnInit {
  @Input() readyOnly = true;

  constructor() { }

  ngOnInit(): void {
  }

}
