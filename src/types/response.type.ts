class ResponseFormat {
  private data: any
  private statusCode: any
  private error: any

  constructor(statusCode: number = 200, data: any, error: any = null) {
    this.statusCode = statusCode
    this.data = data
    this.error = error
  }

  public static createErrorResponse(statusCode: number = 400, error: any) {
    const responseFormat = new ResponseFormat(statusCode, null, error)
    return responseFormat
  }

  isSuccess() {
    return this.statusCode >= 200 && this.statusCode < 400
  }


  public get getStatus(): any {
    return this.statusCode
  }

  public get getData(): any {
    return this.data
  }


  public get getError(): any {
    return this.error
  }

}

export = ResponseFormat