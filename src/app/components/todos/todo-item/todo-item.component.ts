import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { Todo } from "src/app/model/Todo";
import { TodoService } from "src/app/services/todo.service";
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"],
})
export class TodoItemComponent implements OnInit {
  @Input() todo;
  @Input() moveTo: Function;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @ViewChild("inputObj") inputObj: ElementRef;
  editMode: boolean;

  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;
  constructor(private todoServer: TodoService) {}

  ngOnInit() {
    this.todoServer.onSelected.subscribe((curTodo) => {
      this.onSelectTodo(curTodo);
    });
  }
  //Set dunamic Classes
  setClasses() {
    let classes = {
      todo: true,
      isComplete: this.todo.completed,
    };
    return classes;
  }
  toggleEdit() {
    this.cancelClick();
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.closeMenu();
    } else {
      if (this.inputObj) this.todo.title = this.inputObj.nativeElement.value;
    }
    this.cancelClick();
    this.todoServer.onSelected.emit(this.todo.id);
  }
  onSelectTodo(id: number): void {
    if (id != this.todo.id && this.editMode) {
      this.editMode = false;
      this.todo.title = this.inputObj.nativeElement.value;
    }
  }
  onToggle(todo) {
    todo.completed = !todo.completed;
  }
  onDelete(todo) {
    this.closeMenu();
    this.deleteTodo.emit(todo);
    this.cancelClick();
  }
  cancelClick(): void {
    event.stopPropagation();
  }
  onSelect(): void {
    if (!this.editMode) this.toggleEdit();
  }
  move(direction: number): void {
    this.cancelClick();
    moveTo(this.todo, direction);
    console.log("Moved " + direction);
    this.closeMenu();
  }
  closeMenu(): void {
    this.menuTrigger.closeMenu();
  }
}
