/*
  Warnings:

  - Added the required column `content_uz` to the `FAQs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_uz` to the `FAQs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_uz` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_uz` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FAQs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "title_uz" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "content_uz" TEXT NOT NULL,
    "publish" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_FAQs" ("content", "created_at", "id", "publish", "title", "updated_at") SELECT "content", "created_at", "id", "publish", "title", "updated_at" FROM "FAQs";
DROP TABLE "FAQs";
ALTER TABLE "new_FAQs" RENAME TO "FAQs";
CREATE TABLE "new_Service" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "icon" TEXT,
    "thumb" TEXT,
    "title" TEXT NOT NULL,
    "title_uz" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "description_uz" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "publish" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_Service" ("created_at", "description", "icon", "id", "price", "publish", "thumb", "title", "updated_at") SELECT "created_at", "description", "icon", "id", "price", "publish", "thumb", "title", "updated_at" FROM "Service";
DROP TABLE "Service";
ALTER TABLE "new_Service" RENAME TO "Service";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
