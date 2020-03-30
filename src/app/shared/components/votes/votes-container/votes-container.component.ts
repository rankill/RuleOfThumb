import {Component, Input, OnInit} from '@angular/core';
import {Post} from '@shared/models/post.model';

@Component({
  selector: 'app-votes-container',
  templateUrl: './votes-container.component.html',
  styleUrls: ['./votes-container.component.scss']
})
export class VotesContainerComponent implements OnInit {
  @Input() postList: Post[];

  constructor() { }

  ngOnInit(): void {}

}
