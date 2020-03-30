import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';

import {Post} from '@shared/models/post.model';
import {animate, style, transition, trigger} from '@angular/animations';
import {ThumbType} from '@shared/enums/common.enum';
import {PostService} from '@shared/services/post/post.service';

@Component({
  selector: 'app-votes-item',
  templateUrl: './votes-item.component.html',
  styleUrls: ['./votes-item.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ width: 0, opacity: 0 }),
            animate('300ms ease',
              style({ width: '*', opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ width: '*', opacity: 1 }),
            animate('300ms ease',
              style({ width: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class VotesItemComponent implements OnInit {
  @Input() post: Post;

  public postTimeAgo: string;
  public postVoted = false;
  public thumbSelected: ThumbType;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postTimeAgo = moment(this.post.createdDate).fromNow();
  }

  /**
   * Method from thumbs action component to choose the vote type
   * @param voteType - Indicates if it is vote Up or Down
   */
  activeVote(voteType) {
    this.thumbSelected = voteType;
  }

  /**
   * This method will update thumbs values of specific post, if the post is already voted so it reset the vited state
   * It will launch the update post method from post service to persist the post change on the Index DB
   */
  setVote() {
    if (this.postVoted) {
      this.postVoted = false;
      this.thumbSelected = null;
      return;
    }

    if (this.thumbSelected) {
      if (!this.post.thumbs) {
        this.post.thumbs = {
          up: 0,
          down: 0,
          total: 0
        };
      }

      this.post.thumbs[this.thumbSelected]++;
      this.post.thumbs.total++;

      // Launch thumbs bar on change hook
      this.post.thumbs = {...this.post.thumbs};

      // Update post and save it on local storage
      this.postService.updatePost(this.post);

      this.postVoted = true;
    }
  }
}
