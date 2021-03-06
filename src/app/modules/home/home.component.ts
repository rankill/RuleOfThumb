import { Component, OnInit } from '@angular/core';
import {PostService} from '@shared/services/post/post.service';
import {Post} from '@shared/models/post.model';
import * as moment from 'moment';
import {faWikipediaW} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public latestPost: Post;
  public postList: Post[];
  public faWikipedia = faWikipediaW;


  public banner = {
    title: '<h3>Speak out. Be heard.</h3> <h1> Be counted </h1>',
    msg: 'Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It\'s easy: You share your opinion, we analyze and put the data in a public report'
  };

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    /**
     * Get the posts list from the Mock API and extract the latest one
     */
    this.postService.getPosts().subscribe(posts => {
      this.postList = posts.sort((left, right) => (moment(right.createdDate).diff(moment(left.createdDate))));
      // Extract latest post to add to the main banner
      this.latestPost = this.postList.shift();
    });
  }

  thumbSelected(thumbType) {
    console.log('Thumb type', thumbType);
  }
}
