import Router from "express"
import {
  createUser,
  findUserOne,
  findUserAll,
  deleteUser,
  updateUser,
} from "../controllers/user_controller.js"
import { checkedUserData } from "../middleware/userValidator.js"

const router = new Router()

router.get("/user/:id", findUserOne) // Поиск пользоватля в БД по ID
router.get("/user", findUserAll) // Поиск всех пользователей в БД
router.post("/user", checkedUserData, createUser) // Создание пользователя в БД
router.put("/user/:id", updateUser) // Изменение данных пользователя в БД по ID
router.delete("/user", deleteUser) // Удаление пользователя из БД по ID

export default router
