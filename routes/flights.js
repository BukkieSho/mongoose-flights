import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// sort the routes as new, all and create
router.get('/new', flightsCtrl.new)
router.get('/', flightsCtrl.index)
router.post('/', flightsCtrl.create)
router.get('/:id', flightsCtrl.show)
router.post('/:id/destinations', flightsCtrl.addAirport)
router.post('/:id/tickets', flightsCtrl.createTicket)


export {
  router
}
