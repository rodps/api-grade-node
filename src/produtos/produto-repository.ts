import prisma from "../prisma"
import { CriarProdutoDTO } from "./dto/criar-produto-dto"
import { DetalhesProdutoDTO } from "./dto/detalhes-produto-dto"

export class ProdutoRepository {
  public async save(dto: CriarProdutoDTO): Promise<number> {
    const produto = await prisma.produto.create({
      data: {
        nome: dto.nome,
        variacoes: {
          create: dto.variacoes
        },
        grade: {
          create: dto.grade
        }
      }
    })
    return produto.id
  }

  public async find(id: number): Promise<DetalhesProdutoDTO | null> {
    const produto = await prisma.produto.findUnique({
      where: {
        id
      },
      include: {
        grade: true,
        variacoes: true
      }
    })
    if (!produto) {
      return null
    }
    return {
      id: produto.id,
      nome: produto.nome,
      grade: produto.grade,
      variacoes: produto.variacoes
    }
  }

  public async findAll({ page }: { page: number } = { page: 0 }): Promise<{
    produtos: DetalhesProdutoDTO[]
    totalPages: number
  }> {
    const limit = 2
    const produtos = await prisma.produto.findMany({
      include: {
        grade: true,
        variacoes: true
      },
      skip: page * limit,
      take: limit
    })
    const count = await prisma.produto.count()
    const totalPages = Math.ceil(count / limit)
    return {
      produtos,
      totalPages
    }
  }

  public async delete(id: number) {
    await prisma.produto.delete({
      where: {
        id
      }
    })
  }

  public async update(
    id: number,
    produto: CriarProdutoDTO
  ): Promise<DetalhesProdutoDTO> {
    const produtoAtualizado = await prisma.produto.update({
      where: {
        id
      },
      data: {
        nome: produto.nome,
        grade: {
          deleteMany: {},
          create: produto.grade
        },
        variacoes: {
          deleteMany: {},
          create: produto.variacoes
        }
      },
      include: {
        variacoes: true,
        grade: true
      }
    })
    return produtoAtualizado
  }
}
