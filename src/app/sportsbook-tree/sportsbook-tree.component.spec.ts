import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsbookTreeComponent } from './sportsbook-tree.component';

describe('SportsbookTreeComponent', () => {
  let component: SportsbookTreeComponent;
  let fixture: ComponentFixture<SportsbookTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsbookTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsbookTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
