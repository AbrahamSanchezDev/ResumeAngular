import { Injectable, EventEmitter } from "@angular/core";
import { Todo } from "../model/Todo";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  public onSelected: EventEmitter<number> = new EventEmitter();
  constructor() {}
  callOnSelected(id: number): void {
    console.log("sending");

    console.log(id);

    this.onSelected.emit(id);
  }
  private todos: Todo[] = [];
  //Get TODO LIst
  getTodos(): Todo[] {
    if (this.todos != null && this.todos.length > 0) {
      return this.todos;
    }
    this.todos.push(new Todo(0, "Finish TODOs tutorial", false));
    this.todos.push(new Todo(1, "Migrate Resume to Angular", false));
    this.todos.push(new Todo(2, "Migrate Projects to Angular", false));
    this.todos.push(new Todo(3, "Create the text to json component", false));
    return this.todos;
  }
}
