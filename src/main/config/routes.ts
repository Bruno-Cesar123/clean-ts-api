import { Express, Router } from 'express'
import fg from 'fast-glob'

export default (_app: Express): void => {
  const router = Router()
  _app.use('/api', router)
  fg.sync('**/src/main/routes/**routes.ts').map(async file => {
    (await import(`../../../${file}`)).default(router)
  })
}
