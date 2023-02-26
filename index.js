import express from "express"
import { env } from "./config/config.js"
import router from "./router/router.js"
import db_init from "./database/db_init.js"

const PORT = env.PORT || 3005

const app = express()
app.use(express.json())

app.use('/api', router)
app.use('/auth', router)

db_init()

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})
