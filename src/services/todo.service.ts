import TodoModel from '../models/todo.model'
import ITodoService from './interfaces/i.todo.service'
import ITodo from '../types/interfaces/i.todo.type'

class TodoService implements ITodoService {

  public async getListTodo(): Promise<ITodo[]> {

    const todos = await TodoModel.find()
    return TodoModel.find()
  }
  public async getTodo(id: number): Promise<ITodo | null> {
    const todo = await TodoModel.findById(id) || null
    return todo
  }

  public async insert(todo: any): Promise<ITodo> {
    // todos.push(todo)
    await TodoModel.create(todo)
    return todo

  }

}

export { TodoService }