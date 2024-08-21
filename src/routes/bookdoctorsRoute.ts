import express, {Router} from 'express'
import authMiddleware from '../middleware/authMiddleware'
import bookDoctors from '../controllers/bookDoctors'

const router:Router = express.Router()

router.route("/").post(authMiddleware.isAuthenticated,bookDoctors.addDoctor)
.get(authMiddleware.isAuthenticated,bookDoctors.getMyLists)

router.route("/:doctorId").patch(authMiddleware.isAuthenticated,bookDoctors.updateMyLists)
.delete(authMiddleware.isAuthenticated,bookDoctors.deleteMyLists)

export default router