import Router from "express"
import * as userController from "../controllers/user_controller.js"
import * as authController from "../controllers/auth_controller.js"
import * as goodController from "../controllers/good_controller.js"
import { checkedUserData } from "../middleware/userValidator.js"

const router = new Router()

router.post("/", authController.auth)
router.post("/login", authController.login)
router.post("/logout", authController.logout)

router.post("/user", checkedUserData, userController.createUser) // Создание пользователя в БД
router.get("/user/:id", userController.findUserOne) // Поиск пользоватля в БД по ID
router.get("/user", userController.findUserAll) // Поиск всех пользователей в БД
router.put("/user/:id", userController.updateUser) // Изменение данных пользователя в БД по ID
router.delete("/user", userController.deleteUser) // Удаление пользователя из БД по ID

router.post("/good", goodController.createGood) // Создание карточки товара в БД
router.get("/good/:code", goodController.findGoodOne) // Поиск товара в БД по ID
router.post("/good/cross", goodController.findGoodCross) // Поиск товаров в БД по CROSS
router.get("/good", goodController.findGoodAll) // Поиск всех товарjd в БД
router.put("/good/:id", goodController.updateGood) // Изменение данных товара в БД по CODE
router.delete("/good", goodController.deleteGood) // Удаление товара из БД по CODE

export default router
