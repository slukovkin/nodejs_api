import Router from "express"
import * as userController from "../controllers/user_controller.js"
import * as authController from "../controllers/auth_controller.js"
import { checkedUserData } from "../middleware/userValidator.js"

const router = new Router()

router.post("/", authController.auth)
router.post("/login", authController.login)
router.post("/logout", authController.logout)

router.get("/user/:id", userController.findUserOne) // Поиск пользоватля в БД по ID
router.get("/user", userController.findUserAll) // Поиск всех пользователей в БД
router.post("/user", checkedUserData, userController.createUser) // Создание пользователя в БД
router.put("/user/:id", userController.updateUser) // Изменение данных пользователя в БД по ID
router.delete("/user", userController.deleteUser) // Удаление пользователя из БД по ID

export default router
