import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Todo } from "src/app/model/Todo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  //Set dunamic Classes
  setClasses() {
    let classes = {
      todo: true,
      isComplete: this.todo.completed,
    };
    return classes;
  }
  onToggle(todo) {
    todo.completed = !todo.completed;
  }
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
