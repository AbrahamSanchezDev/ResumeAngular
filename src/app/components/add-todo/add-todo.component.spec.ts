import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddTodoComponent } from "./add-todo.component";

describe("AddTodoComponent", () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTodoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should Submit the event to add the todo", () => {
    spyOn(component.addTodo, "emit");

    component.onSubmit();
    expect(component.addTodo.emit).not.toHaveBeenCalled();

    component.title = "Some Title";
    component.onSubmit();
    expect(component.addTodo.emit).toHaveBeenCalled();
  });
});
