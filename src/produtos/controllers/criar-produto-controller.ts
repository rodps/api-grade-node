import { NextFunction, Request, Response } from "express"
import { ProdutoRepository } from "../produto-repository"
import { validarProduto } from "../validacoes/validar-produto"

export const criarProdutoController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validarProduto(req)
    const produtoRepository = new ProdutoRepository()
    const produtoId = await produtoRepository.save(req.body)
    res
      .status(201)
      .header({
        Location: `/produtos/${produtoId}`
      })
      .send()
  } catch (err) {
    next(err)
  }
}
