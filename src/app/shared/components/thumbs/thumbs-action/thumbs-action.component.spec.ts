import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbsActionComponent } from './thumbs-action.component';

describe('ThumbsActionComponent', () => {
  let component: ThumbsActionComponent;
  let fixture: ComponentFixture<ThumbsActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbsActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbsActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
