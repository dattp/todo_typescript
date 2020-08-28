import ITodo from "./interfaces/i.todo.type"

class Todo implements ITodo {
  id: number
  title: string
  description: string
  status: number

  constructor(id: number, title: string, description: string = '', status: number = 0) {
    this.id = id
    this.title = title
    this.description = description
    this.status = status
  }


  public set setTitle(title: string) {
    this.title = title;
  }


  public set setDescription(v: string) {
    this.description = v;
  }


  public set setStatus(v: number) {
    this.status = v;
  }


  public get getTitle(): string {
    return this.title
  }


  public get getDescription(): string {
    return this.description
  }


  public get getStatus(): number {
    return this.status
  }

}

export { Todo }