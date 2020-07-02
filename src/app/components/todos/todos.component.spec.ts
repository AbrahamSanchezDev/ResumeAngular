import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TodosComponent } from "./todos.component";
import { Todo } from "src/app/model/Todo";
import { CdkDragDrop } from "@angular/cdk/drag-drop";

describe("TodosComponent", () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  let todo: Todo = new Todo(1, "some Title", false);
  let todo2: Todo = new Todo(2, "some Title 2", true);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should fill the menu with the functions", () => {
    component.fillMenuOptions();
    expect(component.menu.data.length).toBe(3);

    spyOn(component, "moveTodoUp");
    component.menu.data[0].callback(todo);
    expect(component.moveTodoUp).toHaveBeenCalled();

    spyOn(component, "moveTodoDown");
    component.menu.data[1].callback(todo);
    expect(component.moveTodoDown).toHaveBeenCalled();

    spyOn(component, "deleteTodo");
    component.menu.data[2].callback(todo);
    expect(component.deleteTodo).toHaveBeenCalled();
  });

  it("should delete todo", () => {
    component.addTodo(todo);
    component.addTodo(todo2);
    component.deleteTodo(todo);
    expect(component.todos.includes(todo)).toBe(false);
  });
  it("should move todo up", () => {
    component.todos = [];
    component.addTodo(todo);
    component.addTodo(todo2);
    component.moveTodoUp(todo2);
    expect(component.todos[0]).toBe(todo2);
  });
  it("should move todo down", () => {
    component.todos = [];
    component.addTodo(todo);
    component.addTodo(todo2);
    component.moveTodoDown(todo);
    expect(component.todos[1]).toBe(todo);
  });

  it("should move element based on the drag drop event ", () => {
    component.todos = [];
    component.addTodo(todo);
    component.addTodo(todo2);
    let dropEvent: CdkDragDrop<string[]> = {
      previousIndex: 1,
      currentIndex: 0,
      item: null,
      container: null,
      previousContainer: null,
      isPointerOverContainer: null,
      distance: {
        x: 1,
        y: 1,
      },
    };
    component.drop(dropEvent);
    expect(component.todos[0]).toBe(todo2);
  });
});
