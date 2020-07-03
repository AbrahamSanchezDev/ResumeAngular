import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TodoItemComponent } from "./todo-item.component";
import { Menu } from "src/app/model/menu/Menu";
import { ElementRef } from "@angular/core";
import { MenuObjComponent } from "../../menu-obj/menu-obj.component";
import { InUseMaterialModule } from "src/app/material-module";

export class MockElementRef extends ElementRef {}

describe("TodoItemComponent", () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let menu: Menu;
  let input: ElementRef<HTMLInputElement>;
  // let menuObj : MenuObjComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemComponent, MenuObjComponent],
      providers: [{ provide: ElementRef, useClass: MockElementRef }],
      imports: [InUseMaterialModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    let menuObj = TestBed.createComponent(MenuObjComponent);

    component.menuControl = menuObj.componentInstance;

    menuObj.detectChanges();
    fixture.detectChanges();
    //New values
    menu = new Menu();
    menu.data = [];
    component.menu = menu;
    input = new MockElementRef(HTMLInputElement);
    input.nativeElement.value = "title";
    component.inputObj = input;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should Call the onSelected Todo  ", () => {
    spyOn(component, "onSelectTodo");
    component.todoServer.onSelected.emit(0);
    expect(component.onSelectTodo).toHaveBeenCalled();
  });

  it("should combine Menus", () => {
    component.combineMenus();
    expect(component.myMenu).not.toEqual(null);
  });
  it("should call toggle Edit on the first menu", () => {
    component.combineMenus();
    spyOn(component, "toggleEdit");
    component.myMenu.data[0].callback();
    expect(component.toggleEdit).toHaveBeenCalled();
  });
  it("should toggle Edit mode", () => {
    component.editMode = false;
    spyOn(component, "closeMenu");
    component.toggleEdit();
    expect(component.editMode).toBe(true);
    expect(component.closeMenu).toHaveBeenCalled();
    //On No Edit mode
    component.inputObj.nativeElement.value = "Some Value";
    component.editMode = true;
    component.toggleEdit();
    expect(component.todo.title).toBe("Some Value");
    //When there is no input obj
    component.inputObj = null;
    component.editMode = true;
    component.todo.title = "no";
    component.toggleEdit();
    expect(component.todo.title).toBe("no");
  });

  it("should exit edit mode if it's active", () => {
    spyOn(component, "toggleEdit");
    component.editMode = false;
    component.exitEdit();
    expect(component.toggleEdit).not.toHaveBeenCalled();
    //When the edit mode is active
    component.editMode = true;
    component.exitEdit();
    expect(component.toggleEdit).toHaveBeenCalled();
  });
  it("should exit edit mode on selected if it is not the same id", () => {
    component.editMode = true;
    component.onSelectTodo(1);
    expect(component.todo.title).toBe("title");
    expect(component.editMode).toBe(false);
  });
  it("should toggle todo complete", () => {
    component.todo.completed = false;
    component.onToggle(component.todo);
    expect(component.todo.completed).toBe(true);
  });
  it("should toggle edit mode if is active", () => {
    component.editMode = false;
    component.onSelect();
    expect(component.editMode).toBe(true);
    //When the enable mode is already on
    component.editMode = true;
    spyOn(component, "toggleEdit");
    component.onSelect();
    expect(component.editMode).toBe(true);
    expect(component.toggleEdit).not.toHaveBeenCalled();
  });
  it("should called on the event", () => {
    spyOn(component, "sendEvent");
    component.onSelectTopic();
    expect(component.sendEvent).toHaveBeenCalled();
  });
  const setMenu = () => {
    component.menu.data = [];
    component.menu.data.push({
      text: "Edit",
      callback: (todo) => {
        component.onToggle(todo);
      },
    });
  };
  it("should call on the menu callback", () => {
    setMenu();
    spyOn(component, "onToggle");
    component.onOption(component.menu.data[0]);
    expect(component.onToggle).toHaveBeenCalled();
  });

  it("should end edit mode if its on", () => {
    spyOn(component, "exitEdit");
    setMenu();
    component.endEditMode(component.menu.data[0]);
    expect(component.exitEdit).not.toHaveBeenCalled();

    component.editText = "Some Other Edit";
    component.endEditMode(component.menu.data[0]);
    expect(component.exitEdit).toHaveBeenCalled();
  });
});
