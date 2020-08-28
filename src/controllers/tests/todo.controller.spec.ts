import httpMocks from 'node-mocks-http'
import { Request, Response } from 'express'
import { TodoController } from '../todo.controller'
import { TodoService } from '../../services/todo.service'

describe('test Todo controller', () => {
  let todoService: TodoService
  let todoController: TodoController
  let req: Request
  let res: Response

  beforeAll(() => {
    todoService = new TodoService()
    todoController = new TodoController(todoService)
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()

    // prepare data
  })

  it('Should return list todo', async () => {
    await todoController.getTodos(req, res)
    const dataResult = res._getData().data
    expect.assertions(1)
    expect(Array.isArray(dataResult)).toBe(true)
  })

  it('Should insert todo into todos', async () => {
    const todoInsert = {
      title: 'todo test',
      description: 'todo insert when run test'
    }
    req.body = todoInsert
    await todoController.insertTodo(req, res)
    const dataResult = res._getData().data
    expect.assertions(3)
    expect(typeof dataResult).toBe('object')
    expect(dataResult.title).toEqual(todoInsert.title)
    expect(dataResult.description).toEqual(todoInsert.description)
  })
})