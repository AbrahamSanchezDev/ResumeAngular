import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MenuObjComponent } from "./menu-obj.component";
import { InUseMaterialModule } from "src/app/material-module";
import { MenuData } from "src/app/model/menu/MenuData";
import { Menu } from "src/app/model/menu/Menu";

describe("MenuObjComponent", () => {
  let component: MenuObjComponent;
  let fixture: ComponentFixture<MenuObjComponent>;

  const testingText: MenuData = {
    text: "some Text",
    callback: null,
  };
  const menu: Menu = {
    data: [testingText],
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuObjComponent],
      imports: [InUseMaterialModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should close the menu", () => {
    spyOn(component.menuTrigger, "closeMenu");
    component.closeMenu();
    expect(component.menuTrigger.closeMenu).toHaveBeenCalled();
  });

  it("should call the event and close the menu", () => {
    spyOn(component, "closeMenu");
    component.callOnMenu(testingText);
    expect(component.closeMenu).toHaveBeenCalled();
  });
  it("should return the menu data", () => {
    component.menu = null;
    let current = component.getMenuData();
    expect(current).toEqual(null);

    component.menu = menu;
    current = component.getMenuData();
    expect(current).toEqual(menu.data);
  });
});
