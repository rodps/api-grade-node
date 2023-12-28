# API Para cadastro de produtos com grade

API para cadastro de produtos com grade utilizando Node.Js, Express e TypeScript. Para o banco de dados foi utilizado o Prisma ORM. Para o deploy foi utilizado o serviço AWS ECS e Github Actions para Continuous Deployment.

###  Tecnologias:
- Node.Js
- TypeScript
- Express
- Prisma ORM
- Docker
- AWS ECS
- Github Actions

### Endpoints disponíveis:

- GET /produtos
- POST /produtos
- GET /produtos/{id}
- PUT /produtos/{id}
- DELETE /produtos/{id}

### Como executar:

- Via Docker:

```docker build -t api-grade .```

```docker run -it -e DATABASE_URL="file:./nome_database_sqlite.db" api-grade```

- Via npm:

```npm install```

```npm run dev```