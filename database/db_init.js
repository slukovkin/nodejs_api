import { env } from "../config/config.js"
import { Sequelize } from "sequelize"

export const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
  host: env.DB_HOST,
  dialect: env.DB_DIALECT,
})

const db_init = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    console.log("Database connecting ON")
  } catch (error) {
    console.log("Database connecting FALSE", error)
  }
}

export default db_init
