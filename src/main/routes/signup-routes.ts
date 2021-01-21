import { Router } from 'express'

export default (router: Router): void => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
  router.post('/signup', (req, res) => {
    res.json({ ok: 'ok' })
  })
}
