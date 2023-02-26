import { body } from "express-validator"

export const checkedUserData = [
  body('email', "Email должен быть корректный").isEmail(),
  body('password', "Пароль не менее 5 символов").isLength({ min: 5 }),
  // body('avatarUrl', "Аватар должен быть ссылкой на изображение").isString(),
]
