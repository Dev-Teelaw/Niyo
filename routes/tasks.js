import { Router } from "express";
import { requireLoggedInUser } from "../middleware/auth.js";
import { create, deleteTask, index, update } from "../controllers/taskController.js";
import { validateRequestBody } from "../middleware/system.js";
import { validateCreate } from "../validators/todoTask.js";


const router = Router()

router.get('/', requireLoggedInUser, index)
router.post('/', requireLoggedInUser, validateRequestBody(validateCreate), create)
router.put('/:id', requireLoggedInUser, validateRequestBody(validateCreate),update )
router.delete('/:id', requireLoggedInUser,  deleteTask)


export default router