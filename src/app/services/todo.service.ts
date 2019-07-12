import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() { }
  //Get TODO LIst
  getTodos() {
    //Example of a combined text
    const url = `${"dir"}/${"path"}`
    //TODO get from a local Json file or from json in google drive
    return [
      {
        id: 0,
        title: "Finish TODOs tutorial",
        completed: false
      },
      {
        id: 1,
        title: "Migrate Resume to Angular",
        completed: false
      },
      {
        id: 2,
        title: "Migrate Projects to Angular",
        completed: false
      },
      {
        id: 3,
        title: "Create the text to json component",
        completed: false
      }
    ];
  }
}
