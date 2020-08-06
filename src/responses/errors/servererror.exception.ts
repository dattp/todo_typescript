import { Response } from 'express';

import ResponseException from "./response.exception";

class ServerError extends ResponseException {
  constructor(message: string, res: Response) {
    super(500, message, res)
  }
}

export default ServerError