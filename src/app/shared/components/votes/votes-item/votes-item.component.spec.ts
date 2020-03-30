import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesItemComponent } from './votes-item.component';

describe('VotesItemComponent', () => {
  let component: VotesItemComponent;
  let fixture: ComponentFixture<VotesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
