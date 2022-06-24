import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway'
import { JSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'

import schema from './schema'

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  return JSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
  })
}

export const main = middyfy(hello)
