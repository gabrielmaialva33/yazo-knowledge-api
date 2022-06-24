import { DocumentClient } from 'aws-sdk/clients/dynamodb'

import PartnerModel from '@models/partner.model'

export default class PartnerService {
  public table: string = 'partners'

  constructor(private db: DocumentClient) {}

  public async list(): Promise<Array<PartnerModel>> {
    const partners = await this.db
      .scan({
        TableName: this.table,
      })
      .promise()

    return partners.Items as Array<PartnerModel>
  }

  public async get(id: string): Promise<PartnerModel> {
    const partner = await this.db
      .get({
        TableName: this.table,
        Key: {
          id: id,
        },
      })
      .promise()
    if (!partner.Item) throw new Error('partner not found or not available.')

    return partner.Item as PartnerModel
  }

  public async store(partner: PartnerModel): Promise<PartnerModel> {
    await this.db
      .put({
        TableName: this.table,
        Item: partner,
      })
      .promise()

    return partner as PartnerModel
  }

  public async edit(id: string, data: string): Promise<PartnerModel> {
    console.log(data)
    const updated = await this.db
      .update({
        TableName: this.table,
        Key: { id: id },
        UpdateExpression: 'set #status = :status',
        ExpressionAttributeNames: {
          '#status': 'status',
        },
        ExpressionAttributeValues: {
          ':status': true,
        },
        ReturnValues: 'ALL_NEW',
      })
      .promise()

    return updated.Attributes as PartnerModel
  }

  public async delete(id: string): Promise<any> {
    return await this.db
      .delete({
        TableName: this.table,
        Key: {
          id: id,
        },
      })
      .promise()
  }
}
