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
    return todos
  }
  public async getTodo(id: number): Promise<ITodo | null> {
    const todo = todos.find(item => item.id === id) || null
    return todo
  }

  public async insert(todo: ITodo): Promise<ITodo | null> {
    todos.push(todo)
    return todo
  }

}

export { TodoService }