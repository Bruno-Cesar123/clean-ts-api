import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL || '')
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accounCollection = MongoHelper.getCollection('accounts')
    await accounCollection.deleteMany({})
  })

  test('Should return an account on sucess', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Bruno',
        email: 'bruno.cesar@gmail.com',
        password: '123',
        confirmPassword: '123'
      })
      .expect(200)
  })
})
