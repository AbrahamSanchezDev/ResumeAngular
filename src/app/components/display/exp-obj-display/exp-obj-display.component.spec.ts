import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpObjDisplayComponent } from './exp-obj-display.component';

describe('ExpObjDisplayComponent', () => {
  let component: ExpObjDisplayComponent;
  let fixture: ComponentFixture<ExpObjDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpObjDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpObjDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
