interface VariacaoDTO {
  nome: string
  valores: string
}

interface GradeDTO {
  nome: string
  estoque: number
  valor: number
}

export interface DetalhesProdutoDTO {
  id: number
  nome: string
  variacoes: VariacaoDTO[]
  grade: GradeDTO[]
}
