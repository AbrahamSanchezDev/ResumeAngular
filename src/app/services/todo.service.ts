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
  //Get TODO LIst
  getTodos() {
    //TODO get from a local Json file or from json in google drive
    return [
      {
        id: 0,
        title: "Finish TODOs tutorial",
        completed: false,
      },
      {
        id: 1,
        title: "Migrate Resume to Angular",
        completed: false,
      },
      {
        id: 2,
        title: "Migrate Projects to Angular",
        completed: false,
      },
      {
        id: 3,
        title: "Create the text to json component",
        completed: false,
      },
    ];
  }
}
