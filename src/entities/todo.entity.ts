import ITodo from "./interfaces/i.todo.entity"

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


  public get getTodo(): ITodo {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      status: this.status
    }
  }
}

export { Todo }