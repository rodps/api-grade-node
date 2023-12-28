import { NextFunction, Request, Response } from "express"
import { ValidationError } from "../errors/validation-error"

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!err) {
    next()
    return
  }
  if (err instanceof ValidationError) {
    res.status(400).json(err.message)
  } else {
    console.log(err)
    res.status(500).send()
  }
}
