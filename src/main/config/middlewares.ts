import { Express } from 'express'
import { bodyParser } from '../middlewares/body-parser'
import { cors } from '../middlewares/cors'
import { contentType } from '../middlewares/content-type'

export default (_app: Express): void => {
  _app.use(bodyParser)
  _app.use(cors)
  _app.use(contentType)
}
