import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDynamicDisplayComponent } from './component-dynamic-display.component';

describe('ComponentDynamicDisplayComponent', () => {
  let component: ComponentDynamicDisplayComponent;
  let fixture: ComponentFixture<ComponentDynamicDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDynamicDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDynamicDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
