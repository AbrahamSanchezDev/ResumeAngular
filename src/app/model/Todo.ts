export class Todo {
  id: number;
  title: string;
  completed: boolean;

  private editMode = false;

  public Edit(): boolean {
    return this.editMode;
  }
  public SetEdit(edit: boolean): void {
    this.editMode = edit;
  }

  constructor(theId: number, title: string, completed: boolean) {
    this.id = theId;
    this.title = title;
    this.completed = completed;
  }
}
