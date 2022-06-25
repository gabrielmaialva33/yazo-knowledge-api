import dynamoose from '@config/dynamoose'

import PartnerSchema from '@models/schemas/partner.schema'

const PartnerModel = dynamoose.model('PartnersTable', PartnerSchema, {
  create: true,
  update: true,
  throughput: 'ON_DEMAND',
})

PartnerModel.serializer.add('JSON', {
  exclude: ['is_deleted'],
  modify: (serialized, original) => ({
    ...serialized,
    created_at: new Date(original.created_at).toISOString(),
    updated_at: new Date(original.updated_at).toISOString(),
  }),
})

PartnerModel.serializer.default.set('JSON')

export default PartnerModel
