import { dynamoDBClient } from '@config/index'
import PartnerService from '@services/partner.service'

const partnerService = new PartnerService(dynamoDBClient())
export default partnerService
