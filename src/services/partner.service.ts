import { DocumentClient } from 'aws-sdk/clients/dynamodb'

import Partner from '@models/partner'

export default class PartnerService {
  public table: string = 'partners'

  constructor(private db: DocumentClient) {}

  public async list(): Promise<Array<Partner>> {
    const partners = await this.db
      .scan({
        TableName: this.table,
      })
      .promise()

    return partners.Items as Array<Partner>
  }

  public async get(id: string): Promise<Partner> {
    const partner = await this.db
      .get({
        TableName: this.table,
        Key: {
          id: id,
        },
      })
      .promise()
    if (!partner.Item) throw new Error('partner not found or not available.')

    return partner.Item as Partner
  }

  public async store(partner: Partner): Promise<Partner> {
    await this.db
      .put({
        TableName: this.table,
        Item: partner,
      })
      .promise()

    return partner as Partner
  }

  public async edit(id: string, data: string): Promise<Partner> {
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

    return updated.Attributes as Partner
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
