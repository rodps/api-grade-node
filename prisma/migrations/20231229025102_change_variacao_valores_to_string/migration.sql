/*
  Warnings:

  - You are about to drop the column `valor` on the `Variacao` table. All the data in the column will be lost.
  - Added the required column `valores` to the `Variacao` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Variacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "valores" TEXT NOT NULL,
    "produtoId" INTEGER NOT NULL,
    CONSTRAINT "Variacao_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Variacao" ("id", "nome", "produtoId") SELECT "id", "nome", "produtoId" FROM "Variacao";
DROP TABLE "Variacao";
ALTER TABLE "new_Variacao" RENAME TO "Variacao";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
