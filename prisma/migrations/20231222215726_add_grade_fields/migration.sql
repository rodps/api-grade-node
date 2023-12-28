/*
  Warnings:

  - Added the required column `estoque` to the `Grade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `Grade` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Grade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "estoque" INTEGER NOT NULL,
    "valor" REAL NOT NULL,
    "produtoId" INTEGER NOT NULL,
    CONSTRAINT "Grade_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Grade" ("id", "nome", "produtoId") SELECT "id", "nome", "produtoId" FROM "Grade";
DROP TABLE "Grade";
ALTER TABLE "new_Grade" RENAME TO "Grade";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
