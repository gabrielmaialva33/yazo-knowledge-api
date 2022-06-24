import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { DateTime } from 'luxon'
import { v4 } from 'uuid'

import { JSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import partnerService from '@services/index'

export const listPartners = middyfy(async (): Promise<APIGatewayProxyResult> => {
  const partners = await partnerService.list()
  return JSONResponse({
    partners,
  })
})

export const getPartner = middyfy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const id = event.pathParameters.id
    try {
      const partner = await partnerService.get(id)
      return JSONResponse({
        partner,
        id,
      })
    } catch (error) {
      return JSONResponse({
        status: 500,
        message: error,
      })
    }
  }
)

export const storePartner = middyfy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
      const partner = await partnerService.store({
        id: v4(),
        // @ts-ignore
        title: event.body.title,
        // @ts-ignore
        sub_title: event.body.sub_title,
        // @ts-ignore
        bio: event.body.bio,
        created_at: DateTime.now().toISOString(),
        updated_at: DateTime.now().toISOString(),
      })

      return JSONResponse({
        partner,
      })
    } catch (error) {
      return JSONResponse({
        status: 500,
        message: error,
      })
    }
  }
)

export const editPartner = middyfy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const id = event.pathParameters.id
    const data = event.body
    try {
      const partner = await partnerService.edit(id, data)
      return JSONResponse({
        partner,
        id,
      })
    } catch (error) {
      return JSONResponse({
        status: 500,
        message: error,
      })
    }
  }
)

export const deletePartner = middyfy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const id = event.pathParameters.id
    try {
      const partner = await partnerService.delete(id)
      return JSONResponse({
        partner,
        id,
      })
    } catch (error) {
      return JSONResponse({
        status: 500,
        message: error,
      })
    }
  }
)
