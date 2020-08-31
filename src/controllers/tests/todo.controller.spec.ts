import httpMocks from 'node-mocks-http'
import mongoose from 'mongoose'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.join(__dirname, '../../.env') })

import { Request, Response } from 'express'
import { TodoController } from '../todo.controller'
import { TodoService } from '../../services/todo.service'

describe('test Todo controller', () => {

  let todoService: TodoService
  let todoController: TodoController
  let req: Request
  let res: Response

  beforeAll(async () => {
    mongoose.Promise = global.Promise
    await mongoose.connect(process.env.MONGO_URI + '', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      console.log('connected to mongo');
    }).catch(error => console.log(error))

    todoService = new TodoService()
    todoController = new TodoController(todoService)
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()

    // prepare data
  })

  afterAll(async () => {

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