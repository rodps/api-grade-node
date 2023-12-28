import express from "express"
import {
  atualizarProdutoController,
  criarProdutoController,
  deletarProdutoController,
  lerProdutoController,
  listarProdutosController
} from "./controllers"

const produtoRouter = express.Router()

produtoRouter.post("/produtos", criarProdutoController)
produtoRouter.get("/produtos", listarProdutosController)
produtoRouter.get("/produtos/:id", lerProdutoController)
produtoRouter.delete("/produtos/:id", deletarProdutoController)
produtoRouter.put("/produtos/:id", atualizarProdutoController)

export { produtoRouter }
