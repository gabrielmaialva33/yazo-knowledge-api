import dynamoDBClient from '@config/dynamo'
import PartnerService from '@services/partner.service'

const partnerService = new PartnerService(dynamoDBClient())
export default partnerService
