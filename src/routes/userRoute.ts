import Router from 'express'
import { signUpUser, loginUser, getUser, updatePassword, updateUser} from '../controller/userController'
import { validateUserHandler } from '../middleware/validateUserHandler'

const router = Router()

router.post("/register", signUpUser)
router.post("/login", loginUser)
router.get("/current", validateUserHandler,getUser)
router.patch("/update-password", validateUserHandler,updatePassword)
router.patch("/:id", validateUserHandler, updateUser)


export default router