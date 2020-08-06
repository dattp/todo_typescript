import { Request, Response, NextFunction } from 'express'

interface ITodoController {
  getTodos(req: Request, res: Response): Promise<any>
  getTodoDetail(req: Request, res: Response): Promise<any>
  insertTodo(req: Request, res: Response): Promise<any>
}

export = ITodoController