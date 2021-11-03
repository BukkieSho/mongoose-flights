import { Router } from 'express'
import * as destinationCtrl from '../controllers/destination.js'
const router = Router()

router.get('/new', destinationCtrl.new)
router.post('/', destinationCtrl.create)


export {
    router
}