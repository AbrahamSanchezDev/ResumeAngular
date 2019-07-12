import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title: string;
  @Input('tempText') tempPlaceHolder: string = "Add...";
  @Input('addText') addText: string = "Submit";
  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    if (this.title) {
      const todo = {
        title: this.title,
        completed: false
      }
      this.addTodo.emit(todo);
    }
  }
}
