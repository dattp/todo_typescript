import { Response } from 'express';

import ResponseException from "./response.exception";
import StatusCode from '../../constants/statuscode.constant';

class ErrorNotFound extends ResponseException {
  constructor(message: string, res: Response) {
    super(StatusCode.NOT_FOUND, message, res)
  }
}

export default ErrorNotFound