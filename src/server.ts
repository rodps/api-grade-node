import express from "express"
import { produtoRouter } from "./produtos/produto-router"
import { errorHandler } from "./middlewares/error-handler"
import cors from "cors"

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.use(produtoRouter)
app.use(errorHandler)

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default server
