import request from "supertest"
import app from "../src/server"
import prisma from "../src/prisma"
import { Produto } from "@prisma/client"

describe("Produtos Integration Test", () => {
  afterEach(async () => {
    await prisma.produto.deleteMany()
  })

  afterAll(async () => {
    app.close()
  })

  test("GET /produtos deve retornar 1 produto", async () => {
    await criarProduto()
    const response = await request(app)
      .get("/produtos")
      .expect("Content-Type", /json/)
      .expect(200)
    expect(response.body.produtos).toHaveLength(1)
  })

  test("GET /produtos deve retornar nenhum produto", async () => {
    const response = await request(app)
      .get("/produtos")
      .expect("Content-Type", /json/)
      .expect(200)
    expect(response.body.produtos).toHaveLength(0)
  })

  test("POST /produtos deve retornar status 201", async () => {
    const response = await request(app)
      .post("/produtos")
      .send({
        nome: "teste",
        variacoes: [
          {
            nome: "teste",
            valor: "teste"
          },
          {
            nome: "teste2",
            valor: "teste"
          }
        ],
        grade: [
          {
            nome: "teste",
            estoque: 10,
            valor: 10
          }
        ]
      })
      .expect(201)
    expect(response.body).toEqual({})
  })

  test("POST /produtos deve retornar status 400", async () => {
    await request(app).post("/produtos").send({}).expect(400)
  })

  test("GET /produtos/{id} deve retornar 1 produto", async () => {
    const produto = await criarProduto()
    const response = await request(app)
      .get(`/produtos/${produto.id}`)
      .expect("Content-Type", /json/)
      .expect(200)
    expect(response.body.id).toEqual(produto.id)
    expect(response.body.nome).toEqual(produto.nome)
  })

  test("GET /produtos/{id} deve retornar 404", async () => {
    const response = await request(app).get(`/produtos/123`).expect(404)
    expect(response.body).toEqual({})
  })

  test("DELETE /produtos/{id} deve retornar 200", async () => {
    const produto = await criarProduto()
    const response = await request(app)
      .delete(`/produtos/${produto.id}`)
      .expect(200)
    expect(response.body).toEqual({})
  })
})

const criarProduto = async (): Promise<Produto> => {
  return await prisma.produto.create({
    data: {
      nome: "teste",
      variacoes: {
        create: [
          {
            nome: "teste",
            valor: "teste"
          }
        ]
      },
      grade: {
        create: [
          {
            nome: "teste",
            estoque: 10,
            valor: 10
          }
        ]
      }
    }
  })
}
