import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesGridDisplayComponent } from './images-grid-display.component';

describe('ImagesGridDisplayComponent', () => {
  let component: ImagesGridDisplayComponent;
  let fixture: ComponentFixture<ImagesGridDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesGridDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesGridDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
