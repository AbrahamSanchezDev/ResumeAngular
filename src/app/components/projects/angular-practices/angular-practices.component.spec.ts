import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPracticesComponent } from './angular-practices.component';

describe('AngularPracticesComponent', () => {
  let component: AngularPracticesComponent;
  let fixture: ComponentFixture<AngularPracticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPracticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
