import { User } from "../database/models/User.js"
import { hashPassword } from "../utils/hashPassword.js"

export const createUser = async (req, res) => {
  try {
    const { login, email, password, avatarUrl } = req.body
    const userIfExits = await User.findOne({ where: { email: email } })
    if (userIfExits) {
      return res.status(200).json({
        message: "Пользователь уже существует в базе",
      })
    }
    const user = User.build({
      login: login,
      email: email,
      password: await hashPassword(password),
      avatarUrl: avatarUrl,
    })
    await user.save()
    res.status(201).json({
      message: "Пользователь успешно сохранен в базу данных",
    })
  } catch (error) {
    res.status(400).json({
      message: "Что-то пошло не так",
      error,
    })
  }
}
