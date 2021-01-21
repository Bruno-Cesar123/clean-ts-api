import { Express } from 'express'
import { bodyParser } from '../middlewares/body-parser'
import { cors } from '../middlewares/cors'

export default (_app: Express): void => {
  _app.use(bodyParser)
  _app.use(cors)
}
