import {async, TestBed} from '@angular/core/testing';

import { PostService } from './post.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DBConfig, NgxIndexedDBModule, NgxIndexedDBService} from 'ngx-indexed-db';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryApiService} from '@shared/services/in-memory/in-memory-api.service';
import {Post} from '@shared/models/post.model';

const dbConfig: DBConfig  = {
  name: 'PostDB',
  version: 1,
  objectStoresMeta: [{
    store: 'posts_voted',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'id', keypath: 'id', options: { unique: true } },
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'voteDescription', keypath: 'voteDescription', options: { unique: false } },
      { name: 'isMain', keypath: 'isMain', options: { unique: false } },
      { name: 'expireDate', keypath: 'expireDate', options: { unique: false } },
      { name: 'createdDate', keypath: 'createdDate', options: { unique: false } },
      { name: 'media', keypath: 'media', options: { unique: false } },
      { name: 'wikiPath', keypath: 'wikiPath', options: { unique: false } },
      { name: 'categoryName', keypath: 'categoryName', options: { unique: false } },
      { name: 'thumbs', keypath: 'thumbs', options: { unique: false } },
    ]
  }]
};

const mockPost: Post = {
  id: 1,
  name: 'Pope Francis',
  voteDescription: 'He\'s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)',
  isMain: true,
  expireDate: '2020-04-21',
  createdDate: '2020-03-28T01:30',
  media: '/assets/people/papa_francisco.jpg',
  wikiPath: 'https://es.wikipedia.org/wiki/Francisco_(papa)',
  categoryName: 'Religion',
  thumbs: {
    up: 0,
    down: 0,
    total: 0
  }
};

describe('Post Service', () => {
  let service: PostService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgxIndexedDBModule.forRoot(dbConfig),
        BrowserAnimationsModule,
        HttpClientInMemoryWebApiModule.forRoot(
          InMemoryApiService, { dataEncapsulation: false }
        )
      ],
      providers: [NgxIndexedDBService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(PostService);
  });

  it('Should get a list of posts', async  () =>  {
    const posts = await service.getPosts().toPromise();
    const POST_AMOUNT = 5; // Currently there are only 5 posts

    expect(posts).toBeInstanceOf(Array);
    expect(posts.length).toEqual(POST_AMOUNT);
  });

  it('Should update a post', async  () =>  {
    mockPost.thumbs.up++;
    mockPost.thumbs.down++;
    mockPost.thumbs.total = 2;

    await service.updatePost(mockPost);

    const dbService = TestBed.inject(NgxIndexedDBService);
    const dbPost = await dbService.getByKey('posts_voted', mockPost.id);
    expect(dbPost).toEqual(mockPost);
  });
});
