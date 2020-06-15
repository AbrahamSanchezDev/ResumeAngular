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
  constructor(id: number, title: string, completed: boolean) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
