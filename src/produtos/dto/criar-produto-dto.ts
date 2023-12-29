interface VariacaoDTO {
  nome: string
  valores: string
}

interface GradeDTO {
  nome: string
  estoque: number
  valor: number
}

export interface CriarProdutoDTO {
  nome: string
  variacoes: VariacaoDTO[]
  grade: GradeDTO[]
}
