import { Express } from 'express'
import { bodyParser } from '../middlewares/body-parser'

export default (_app: Express): void => {
  _app.use(bodyParser)
}
