import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { env } from "../config/config.js"
import { User } from "../database/models/User.js"

export const auth = (req, res) => {}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    let user = await User.findOne({ where: { email: email } })
    if (!user) {
      return res.status(400).json({
        message: "Ошибка при запросе пользователя",
      })
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Ошибка аудентификации. Доступ запрещен",
      })
    }
    const token = jwt.sign(
      {
        data: user.email,
      },
      env.SECRET,
      { expiresIn: "1h" }
    )
    user = {
      id: user.id,
      login: user.login,
      email: user.email,
      avatarUrl: user.avatarUrl,
      role: user.role
    }
    res.status(200).json({
      message: "Доступ разрешен",
      user,
      token,
    })
  } catch (error) {
    res.status(400).json({
      message: "Ошибка запроса",
    })
  }
}

export const logout = (req, res) => {}
