// import TodoModel from '../models/todo.model'
import ITodoService from './interfaces/i.todo.service'
import { Todo } from '../entities/todo.entity'
import ITodo from '../entities/interfaces/i.todo.entity'

const todos = [
  {
    id: 1,
    title: 'type',
    description: 'code type',
    status: 0
  },
  {
    id: 2,
    title: 'js',
    description: 'code js',
    status: 2
  },
  {
    id: 3,
    title: 'java',
    description: 'code java',
    status: 0
  }
]

class TodoService implements ITodoService {

  public async getListTodo(): Promise<ITodo[]> {
    try {
      return todos
    } catch (error) {
      throw new Error(error.message)
    }
  }
  public async getTodo(id: number): Promise<ITodo | null> {
    try {
      const todo = todos.find(item => item.id === id) || null
      return todo
    } catch (error) {
      throw new Error(error.message)
    }
  }

  public async insert(todo: ITodo): Promise<ITodo | null> {
    try {
      todos.push(todo)
      return todo
    } catch (error) {
      throw new Error(error.message)
    }
  }

}

export { TodoService }