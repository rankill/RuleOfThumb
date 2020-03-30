import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {VotesItemComponent} from '@shared/components/votes/votes-item/votes-item.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DBConfig, NgxIndexedDBModule, NgxIndexedDBService} from 'ngx-indexed-db';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ThumbType} from '@shared/enums/common.enum';
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


describe('VotesItemComponent', () => {
  let component: VotesItemComponent;
  let fixture: ComponentFixture<VotesItemComponent>;
  const thumbType = ThumbType;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotesItemComponent ],
      imports: [
        HttpClientTestingModule,
        NgxIndexedDBModule.forRoot(dbConfig),
        BrowserAnimationsModule
      ],
      providers: [NgxIndexedDBService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesItemComponent);
    component = fixture.componentInstance;
    component.post = mockPost;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should active vote down', () => {
    component.activeVote(thumbType.Down);
    expect(component.thumbSelected).toEqual(thumbType.Down);
  });

  it('Should check indexed Db to check if the value was added after a vote', async  () =>  {
    const resetVoteState = () => {
      // reset vote state
      component.postVoted = false;
      component.thumbSelected = null;
    };

    component.activeVote(thumbType.Down);
    component.setVote();
    resetVoteState();

    component.activeVote(thumbType.Up);
    component.setVote();

    expect(component.post.thumbs).toEqual({
      down: 1,
      up: 1,
      total: 2,
    });

    const dbService = TestBed.inject(NgxIndexedDBService);
    const dbPost = await dbService.getByKey('posts_voted', component.post.id);
    expect(dbPost.id).toEqual(component.post.id);
  });
});
