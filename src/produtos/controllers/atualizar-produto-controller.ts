import { NextFunction, Request, Response } from "express"
import { ProdutoRepository } from "../produto-repository"
import { validarProduto } from "../validacoes/validar-produto"

export const atualizarProdutoController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validarProduto(req)
    const id = parseInt(req.params.id)
    const produto = req.body
    const repository = new ProdutoRepository()
    const produtoAtualizado = await repository.update(id, produto)
    res.status(200).json(produtoAtualizado)
  } catch (err) {
    next(err)
  }
}
