import { NextFunction, Request, Response } from 'express';
import ResponseFormat from '../../types/response.type';

class ResponseException {

  constructor(status: number, message: string, res: Response) {
    this._handResponse(status, message, res)
  }

  private _handResponse(status: number, message: string, res: Response): any {
    const output = new ResponseFormat(status, null, message)
    res.status(output.getStatus).send(output)

  }
}

export default ResponseException;
