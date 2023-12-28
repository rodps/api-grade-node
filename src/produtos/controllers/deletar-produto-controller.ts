import { NextFunction, Request, Response } from "express"
import { ProdutoRepository } from "../produto-repository"

export const deletarProdutoController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id)
    const repository = new ProdutoRepository()
    await repository.delete(id)
    res.status(200).send()
  } catch (err) {
    next(err)
  }
}
