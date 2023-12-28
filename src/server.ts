import express from "express"
import { produtoRouter } from "./produtos/produto-router"
import { errorHandler } from "./middlewares/error-handler"
import cors from "cors"

const server = express()
const port = 3000

server.use(express.json())
server.use(cors())

server.use(produtoRouter)
server.use(errorHandler)

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
