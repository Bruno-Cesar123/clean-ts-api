import { Express } from 'express'
import { bodyParser, cors, contentType } from '../middlewares'

export default (_app: Express): void => {
  _app.use(bodyParser)
  _app.use(cors)
  _app.use(contentType)
}
