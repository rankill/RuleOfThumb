import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';

import {Post} from '@shared/models/post.model';

enum Vote {
  Up,
  Down
}

@Component({
  selector: 'app-votes-item',
  templateUrl: './votes-item.component.html',
  styleUrls: ['./votes-item.component.scss']
})
export class VotesItemComponent implements OnInit {
  @Input() post: Post;

  public postTimeAgo: string;
  public postVoted = false;
  public currentVote: Vote;

  public VOTE_UP: Vote = Vote.Up;
  public VOTE_DOWN: Vote = Vote.Down;

  constructor() { }

  ngOnInit(): void {
    this.postTimeAgo = moment(this.post.createdDate).fromNow();
  }

  setVote(voteType) {
    this.currentVote = voteType;
  }
}
