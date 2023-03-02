import { Good } from "../database/models/Good.js"

export const createGood = async (req, res) => {
  try {
    const { code, article, title, qty, price, cross } = req.body
    const goodIsExits = await Good.findOne({ where: { code } })
    if (goodIsExits) {
      return res.status(200).json({
        message: "Товар уже существует в базе",
      })
    }
    const good = await Good.build({
      code,
      article,
      title,
      qty,
      price,
      cross,
    })
    await good.save()
    res.status(201).json({
      message: "Товар успешно добавлен в БД",
      good,
    })
  } catch (error) {
    res.status(500).json({
      message: "Что-то пошло не так",
      error,
    })
  }
}

export const findGoodOne = async (req, res) => {
  try {
    const code = req.params.code
    let good = await Good.findOne({ where: { code: code } })
    if (!good) {
      return res.status(404).json({
        message: "Товар не найден",
      })
    }
    good = {
      id: good.id,
      code: good.code,
      article: good.article,
      title: good.title,
      qty: good.qty,
      price: good.price,
      cross: good.cross,
      imageUrl: good.imageUrl,
    }
    res.status(200).json({
      message: "Товар найден в БД",
      good,
    })
  } catch (error) {
    res.status(500).json({
      message: "Что-то пошло не так",
      error,
    })
  }
}

export const findGoodCross = async (req, res) => {
  try {
    const { cross } = req.body
    let goods = await Good.findAll({ where: { cross } })
    if (!goods) {
      return res.status(404).json({
        message: "Товар не найден",
      })
    }
    res.status(200).json({
      message: `Найдено ${goods.length}`,
      goods,
    })
  } catch (error) {
    res.status(500).json({
      message: "Что-то пошло не так",
      error,
    })
  }
}

export const findGoodAll = async (req, res) => {
  try {
    let goods = await Good.findAll()
    if (!goods) {
      return res.status(404).json({
        message: "Товаров в БД не найдено",
      })
    }
    res.status(200).json({
      message: `Количество товаров в БД: ${goods.length}`,
      goods,
    })
  } catch (error) {
    res.status(500).json({
      message: "Что-то пошло не так",
      error,
    })
  }
}

export const updateGood = async (req, res) => {
  try {
    const { code, article, title, qty, price, cross, imageUrl } = req.body
    const error = await Good.update(
      {
        id: id,
        code: code,
        article: article,
        title: title,
        qty: qty,
        price: price,
        cross: cross,
        imageUrl: imageUrl,
      },
      {
        where: { id: req.params.id },
      }
    )
    if (!error[0]) {
      return res.status(404).json({
        message: "Товар не найден в БД",
      })
    }
    res.status(201).json({
      message: "Данные товара успешно обновлены в БД",
    })
  } catch (error) {
    res.status(500).json({
      message: "Что-то пошло не так",
      error,
    })
  }
}

export const deleteGood = async (req, res) => {
  try {
    const { code } = req.body
    const good = await Good.destroy({ where: { code } })
    if (!good) {
      return res.status(404).json({
        message: "Товар не найден в БД",
      })
    }
    res.status(200).json({
      message: `Товар успешно удален из БД`,
    })
  } catch (error) {
    res.status(500).json({
      message: "Что-то пошло не так",
      error,
    })
  }
}
