import { Response } from 'express';

import ResponseException from "./response.exception";
import StatusCode from '../../constants/statuscode.constant';

class ErrorMissingParam extends ResponseException {
  constructor(message: string, res: Response) {
    super(StatusCode.MISSING_PARAM, message, res)
  }
}

export default ErrorMissingParam