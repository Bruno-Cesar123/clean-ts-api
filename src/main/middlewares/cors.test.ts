import request from 'supertest'
import app from '../config/app'

describe('CORS Middlewares', () => {
  test('Should parse body as json', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
    app.get('/test_cors', (req, res) => {
      res.send()
    })
    await request(app)
      .get('/test_cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*')
  })
})
