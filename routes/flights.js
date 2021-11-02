import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

// sort the routes as new, all and create
router.get('/new', flightsCtrl.new)
router.get('/', flightsCtrl.index)
router.post('/', flightsCtrl.create)

export {
  router
}
