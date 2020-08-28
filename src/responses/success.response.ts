import { Response } from 'express';
import ResponseFormat from '../types/response.type';
import StatusCode from '../constants/statuscode.constant';

class ResponseSuccess {

  constructor(data: any, res: Response) {
    this._handResponse(data, res)
  }

  private _handResponse(data: any, res: Response): any {
    const output = new ResponseFormat(StatusCode.SUCCESS, data, null)
    res.status(output.getStatus).send(output)
  }

}

export default ResponseSuccess;
