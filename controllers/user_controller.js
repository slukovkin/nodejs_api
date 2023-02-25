import { User } from "../database/models/User.js"
import { hashPassword } from "../utils/hashPassword.js"

export const createUser = async (req, res) => {
  try {
    const { email, password, avatarUrl } = req.body
    const userIfExits = await User.findOne({ where: { email: email } })
    if (userIfExits) {
      return res.status(200).json({
        message: "Пользователь уже существует в базе",
      })
    }
    const user = User.build({
      login: email.match(/^([\w ]+)/gms).toString(),
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

export const findUserOne = async (req, res) => {
  try {
    const id = req.params.id
    const user = await User.findOne({ where: { id: id } })
    if (!user) {
      return res.status(200).json({
        message: "Пользователь не найден",
      })
    }
    res.status(200).json({
      message: "Пользователь найден в БД",
      user,
    })
  } catch (error) {
    res.status(400).json({
      message: "Что-то пошло не так",
      error,
    })
  }
}

export const findUserAll = async (req, res) => {
  try {
    const users = await User.findAll()
    if (!users) {
      return res.status(200).json({
        message: "Пользователей в БД не найдено",
      })
    }
    res.status(200).json({
      message: `Количество пользователей в БД: ${users.length}`,
      users,
    })
  } catch (error) {
    res.status(400).json({
      message: "Что-то пошло не так",
      error,
    })
  }
}

export const updateUser = async (req, res) => {
  try {
    const { email, password, avatarUrl } = req.body
    await User.update(
      {
        login: email.match(/^([\w ]+)/gms).toString(),
        email: email,
        password: await hashPassword(password),
        avatarUrl: avatarUrl
      },
      {
        where: { id: req.params.id },
      }
    )
    res.status(201).json({
      message: 'Данные пользователя успешно обновлены в БД'
    })
  } catch (error) {
    res.status(400).json({
      message: "Что-то пошло не так",
      error,
    })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { email } = req.body
    const user = await User.destroy({ where: { email } })
    if (!user) {
      return res.status(200).json({
        message: "Пользователь не найден в БД",
      })
    }
    res.status(200).json({
      message: `Пользователь успешно удален из БД`,
    })
  } catch (error) {
    res.status(400).json({
      message: "Что-то пошло не так",
      error,
    })
  }
}
