import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HomeComponent} from '@app/modules/home/home.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DBConfig, NgxIndexedDBModule, NgxIndexedDBService} from 'ngx-indexed-db';

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


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        HttpClientTestingModule,
        NgxIndexedDBModule.forRoot(dbConfig)
      ],
      providers: [NgxIndexedDBService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
