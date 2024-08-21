import express,{Router} from 'express'
import authMiddleware,{Role} from '../middleware/authMiddleware'
import departmentHospital from '../controllers/departmentHospital'

const router:Router = express.Router()

router.route("/")
.post(authMiddleware.isAuthenticated,authMiddleware.restrictTo(Role.Admin),
departmentHospital.addDepartment)
.get(departmentHospital.getDepartments)

router.route("/:id")
.delete(authMiddleware.isAuthenticated,authMiddleware.restrictTo(Role.Admin),
departmentHospital.deleteDepartment)
.patch(authMiddleware.isAuthenticated,authMiddleware.restrictTo(Role.Admin),
departmentHospital.updateDepartment)

export default router