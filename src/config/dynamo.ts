import * as AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'

const dynamoDBClient = (): DocumentClient => new AWS.DynamoDB.DocumentClient()
export default dynamoDBClient
