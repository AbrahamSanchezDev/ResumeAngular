import { Component, OnInit } from "@angular/core";
import { Todo } from "../../model/Todo";
import { TodoService } from "../../services/todo.service";
import { Menu } from "src/app/model/menu/Menu";
import { ArraysToolService } from "src/app/library/arrays-tool/arrays-tool.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  menu: Menu;
  constructor(
    private todoService: TodoService,
    private arrayTool: ArraysToolService
  ) {
    this.fillMenuOptions();
  }
  //Set the options that should display
  fillMenuOptions(): void {
    this.menu = new Menu();
    this.addOptionToMenu("Move Up", (todo) => this.moveTodoUp(todo));
    this.addOptionToMenu("Move Down", (todo) => this.moveTodoDown(todo));
    this.addOptionToMenu("Delete", (todo) => this.deleteTodo(todo));
  }
  //Add an option to the menu must pass callback like this:  (todo) => this.deleteTodo(todo)
  addOptionToMenu(displayText: string, callback: Function) {
    this.menu.data.push({
      text: displayText,
      callback: (todo) => callback(todo),
    });
  }
  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
  //Delete the given object
  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t !== todo);
  }
  //Move the given object up
  moveTodoUp(todo: Todo) {
    this.arrayTool.moveElementLeft(this.todos, todo);
  }
  //Move the given object down
  moveTodoDown(todo: Todo) {
    this.arrayTool.moveElementRight(this.todos, todo);
  }
  //Add new object
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
