import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuObjComponent } from './menu-obj.component';

describe('MenuObjComponent', () => {
  let component: MenuObjComponent;
  let fixture: ComponentFixture<MenuObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
