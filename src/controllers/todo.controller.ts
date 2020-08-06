import { Request, Response } from 'express'

import ITodoService from '../services/interfaces/i.todo.service'
import ITodoController from './interfaces/i.todo.controller'
import ErrorNotFound from '../responses/errors/notfound.exception'
import ErrorMissingParam from '../responses/errors/missingparam.exception'
import { Todo } from '../entities/todo.entity'
import ServerError from '../responses/errors/servererror.exception'
import ResponseSuccess from '../responses/success.response'

class TodoController implements ITodoController {
  public static todoService: ITodoService

  constructor(service: ITodoService) {
    TodoController.todoService = service
  }

  public async getTodos(req: Request, res: Response): Promise<any> {
    try {
      const todos = await TodoController.todoService.getListTodo()
      return new ResponseSuccess(todos, res)
    } catch (error) {
      return new ServerError(error.message, res)
    }
  }

  public async getTodoDetail(req: Request, res: Response): Promise<any> {
    const id = parseInt(req.params.id, 10)
    if (!id || isNaN(id)) {
      // return res.status(406).send('ko')
      return new ErrorNotFound(`todo id ${id} not found`, res)
    }
    try {
      const todo = await TodoController.todoService.getTodo(id)
      if (!todo) {
        return new ErrorNotFound(`todo id ${id} not found`, res)
      }
      return new ResponseSuccess(todo, res)
    } catch (error) {
      return new ServerError(error.message, res)
    }
  }

  public async insertTodo(req: Request, res: Response): Promise<any> {
    const { title, description } = req.body
    if (!title) {
      return new ErrorMissingParam('title missing!', res)
    }
    try {
      const todo = new Todo(4, title, description)
      const resultInsert = await TodoController.todoService.insert(todo.getTodo)
      return new ResponseSuccess(resultInsert, res)
    } catch (error) {
      return new ServerError(error.message, res)
    }
  }
}

export { TodoController }