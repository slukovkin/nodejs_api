import Router from 'express'

const router = new Router()

router.get('/api', (req, res) => {
  res.end(`API NodeJS`)
})

router.get('/', (req, res) => {
  res.end('Home Page')
})

export default router