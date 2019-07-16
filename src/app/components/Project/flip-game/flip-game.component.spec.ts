import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipGameComponent } from './flip-game.component';

describe('FlipGameComponent', () => {
  let component: FlipGameComponent;
  let fixture: ComponentFixture<FlipGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
