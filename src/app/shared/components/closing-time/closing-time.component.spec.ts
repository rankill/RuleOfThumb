import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingTimeComponent } from './closing-time.component';
import {Post} from '@shared/models/post.model';

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

const mockPostBadDate: Post = {
  id: 1,
  name: 'Pope Francis',
  voteDescription: 'He\'s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)',
  isMain: true,
  expireDate: null,
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

describe('ClosingTimeComponent', () => {
  let component: ClosingTimeComponent;
  let fixture: ComponentFixture<ClosingTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosingTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosingTimeComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should check if days amount is a number', () => {
    component.expireDate = mockPost.expireDate;
    fixture.detectChanges();

    expect(component.daysAmount).not.toBeNaN();
    expect(component.daysAmount).toBeInstanceOf(Number);
  });

  it('Should check if days amount is a 0 if expire date is null', () => {
    component.expireDate = mockPostBadDate.expireDate;
    fixture.detectChanges();

    expect(component.daysAmount).not.toBeNaN();
    expect(component.daysAmount).toEqual(0);
  });
});
