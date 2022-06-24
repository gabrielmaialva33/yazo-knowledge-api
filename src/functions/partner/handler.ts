import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from 'aws-lambda'
import { DateTime } from 'luxon'
import { v4 } from 'uuid'

import { JSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { PartnerStoreDto, PartnerEditDto } from '@models/partner.dto'

import partnerService from '@services/index'

export const listPartners = middyfy(async (): Promise<APIGatewayProxyResult> => {
  const partners = await partnerService.list()
  return JSONResponse({
    partners,
  })
})

export const getPartner: Handler = middyfy(
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

export const storePartner: Handler = middyfy(
  async (event: APIGatewayProxyEvent & PartnerStoreDto): Promise<APIGatewayProxyResult> => {
    const { title, sub_title, bio } = event.body

    try {
      const partner = await partnerService.store({
        id: v4(),
        title,
        sub_title,
        bio,
        created_at: DateTime.now().toISO(),
        updated_at: DateTime.now().toISO(),
      })

      return JSONResponse({
        partner,
      })
    } catch (error) {
      return JSONResponse({
        status: 500,
        message: error.message,
      })
    }
  }
)

export const editPartner: Handler = middyfy(
  async (event: APIGatewayProxyEvent & PartnerEditDto): Promise<APIGatewayProxyResult> => {
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

export const deletePartner: Handler = middyfy(
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
