import { Router } from "express";
import { login } from "../controllers/authController.js";
import { validateRequestBody } from "../middleware/system.js";
import { validateLogin } from "../validators/user.js";

const router = Router()

router.post('/login', validateRequestBody(validateLogin), login)
export default router