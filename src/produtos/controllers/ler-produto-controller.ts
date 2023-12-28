import { NextFunction, Request, Response } from "express"
import { ProdutoRepository } from "../produto-repository"

export const lerProdutoController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id)
    const produtoRepository = new ProdutoRepository()
    const produto = await produtoRepository.find(id)
    if (produto) {
      res.status(200).json(produto)
      return
    }
    res.status(404).send()
  } catch (err) {
    next(err)
  }
}
