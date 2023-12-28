import Joi from "joi"
import { ValidationError } from "../../errors/validation-error"
import { Request } from "express"

export const validarProduto = (req: Request) => {
  const schema = Joi.object({
    nome: Joi.string(),
    variacoes: Joi.array()
      .items(
        Joi.object({
          nome: Joi.string(),
          valor: Joi.string()
        })
      )
      .min(1),
    grade: Joi.array()
      .items(
        Joi.object({
          nome: Joi.string(),
          estoque: Joi.number(),
          valor: Joi.number()
        })
      )
      .min(1)
  }).options({ presence: "required" })
  const { error } = schema.validate(req.body)
  if (error) {
    throw new ValidationError(error.message)
  }
}
