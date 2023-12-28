import { NextFunction, Request, Response } from "express"
import { ProdutoRepository } from "../produto-repository"

export const listarProdutosController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = req.query.page ? parseInt(req.query.page as string) : 0
    const repository = new ProdutoRepository()
    const produtos = await repository.findAll({ page })
    res.status(200).json(produtos)
  } catch (err) {
    next(err)
  }
}
