import Router from "express"
import { createUser } from "../controllers/user_controller.js"

const router = new Router()

router.post("/user", createUser) // Создание пользователя в БД

export default router
