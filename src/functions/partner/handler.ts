import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from 'aws-lambda'

import { JSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'

import PartnerService from '@services/partner.service'
import PartnerValidator from '@validators/partner.validator'

export const storePartner: Handler = middyfy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
      const data = event.body
      const partnerDto = await PartnerValidator.Store.validate(data)
      const partner = await PartnerService.Store(partnerDto)
      return JSONResponse(partner, 200)
    } catch (e) {
      return JSONResponse({ message: e.message })
    }
  }
)
