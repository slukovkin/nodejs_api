import Router from "express"
import { createUser, findUserOne } from "../controllers/user_controller.js"

const router = new Router()

router.get('/user/:id', findUserOne) // Поиск пользоватля в БД по ID
router.post("/user", createUser) // Создание пользователя в БД

export default router
