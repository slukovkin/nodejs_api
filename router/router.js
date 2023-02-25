import Router from "express"
import {
  createUser,
  findUserOne,
  findUserAll,
  deleteUser,
  updateUser,
} from "../controllers/user_controller.js"

const router = new Router()

router.get("/user/:id", findUserOne) // Поиск пользоватля в БД по ID
router.get("/user", findUserAll) // Поиск всех пользователей в БД
router.post("/user", createUser) // Создание пользователя в БД
router.put("/user/:id", updateUser) // Изменение данных пользователя в БД по Email
router.delete("/user", deleteUser) // Удаление пользователя из БД по ID

export default router
