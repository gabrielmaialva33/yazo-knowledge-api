import { JSONResponse } from '@libs/api-gateway'

export default class NotFound {
  constructor(private message: string, private status: number = 404) {}

  public async handle(error: this) {
    return JSONResponse({ message: error.message, status: error.status }, error.status)
  }
}
