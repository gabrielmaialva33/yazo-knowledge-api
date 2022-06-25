import dynamoose from '@config/dynamoose'

const PartnerSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      required: true,
      hashKey: true,
    },
    title: {
      type: Object,
      required: true,
    },
    is_deleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: ['created_at'],
      updatedAt: ['updated_at'],
    },
    saveUnknown: ['title.*'],
  }
)

export default PartnerSchema
