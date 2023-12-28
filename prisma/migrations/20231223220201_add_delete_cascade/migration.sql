-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Variacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "produtoId" INTEGER NOT NULL,
    CONSTRAINT "Variacao_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Variacao" ("id", "nome", "produtoId", "valor") SELECT "id", "nome", "produtoId", "valor" FROM "Variacao";
DROP TABLE "Variacao";
ALTER TABLE "new_Variacao" RENAME TO "Variacao";
CREATE TABLE "new_Grade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "estoque" INTEGER NOT NULL,
    "valor" REAL NOT NULL,
    "produtoId" INTEGER NOT NULL,
    CONSTRAINT "Grade_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Grade" ("estoque", "id", "nome", "produtoId", "valor") SELECT "estoque", "id", "nome", "produtoId", "valor" FROM "Grade";
DROP TABLE "Grade";
ALTER TABLE "new_Grade" RENAME TO "Grade";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
