import * as dynamoose from 'dynamoose'

dynamoose.aws.ddb.local('http://localhost:5000')

export default dynamoose
