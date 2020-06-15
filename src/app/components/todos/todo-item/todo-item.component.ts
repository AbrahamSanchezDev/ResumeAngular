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
import { Menu } from "src/app/model/menu/Menu";
import { MenuData } from "src/app/model/menu/MenuData";
import { MenuObjComponent } from "../../menu-obj/menu-obj.component";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() moveTo: Function;
  @Input() menu: Menu;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @ViewChild("inputObj") inputObj: ElementRef;
  @ViewChild(MenuObjComponent) menuControl: MenuObjComponent;

  myMenu: Menu;
  editMode: boolean;
  editText: string = "Edit";
  constructor(private todoServer: TodoService) {}

  ngOnInit() {
    this.todoServer.onSelected.subscribe((curTodo) => {
      this.onSelectTodo(curTodo);
    });
    this.combineMenus();
  }
  //Combine the global menu with the local menu
  combineMenus(): void {
    if (this.myMenu == null) {
      this.myMenu = new Menu();
    }
    this.myMenu.data.unshift({
      text: this.editText,
      callback: () => this.toggleEdit(),
    });
    this.myMenu.data = [...this.myMenu.data, ...this.menu.data];
  }
  //Set dunamic Classes
  setClasses() {
    let classes = {
      todo: true,
      isComplete: this.todo.completed,
    };
    return classes;
  }
  //Toggle the edit on this object
  toggleEdit() {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.closeMenu();
    } else {
      if (this.inputObj) this.todo.title = this.inputObj.nativeElement.value;
    }
    this.sendEvent();
  }
  //Exit edit moved if it was on
  exitEdit() {
    if (this.editMode) {
      this.toggleEdit();
    }
  }
  //When selected some other object if this is currently selected then deselected
  onSelectTodo(id: number): void {
    if (id != this.todo.id && this.editMode) {
      this.editMode = false;
      this.todo.title = this.inputObj.nativeElement.value;
    }
  }
  //Toggle completed state of the object
  onToggle(todo) {
    todo.completed = !todo.completed;
    this.sendEvent();
    this.exitEdit();
  }
  //On double click the text
  onSelect(): void {
    if (!this.editMode) this.toggleEdit();
  }
  //On Select topic with single click
  onSelectTopic(): void {
    this.sendEvent();
  }
  //Send on selected menu
  sendEvent(): void {
    this.todoServer.onSelected.emit(this.todo.id);
  }
  //Close the menu window
  closeMenu(): void {
    this.menuControl.closeMenu();
  }
  //Call the data callback
  onOption(data: MenuData) {
    this.endEditMode(data);
    this.sendEvent();
    data.callback(this.todo);
    this.removeSelected();
  }
  //Remove any selected text
  removeSelected(): void {
    window.getSelection().removeAllRanges();
  }
  //End edite mode if it is on
  endEditMode(data: MenuData) {
    if (data.text == this.editText) {
      return;
    }
    this.exitEdit();
  }
}
