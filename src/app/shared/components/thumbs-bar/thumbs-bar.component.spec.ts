import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbsBarComponent } from './thumbs-bar.component';

describe('ThumbsBarComponent', () => {
  let component: ThumbsBarComponent;
  let fixture: ComponentFixture<ThumbsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
