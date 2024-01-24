-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FAQs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "title_uz" TEXT,
    "content" TEXT,
    "content_uz" TEXT,
    "publish" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_FAQs" ("content", "content_uz", "created_at", "id", "publish", "title", "title_uz", "updated_at") SELECT "content", "content_uz", "created_at", "id", "publish", "title", "title_uz", "updated_at" FROM "FAQs";
DROP TABLE "FAQs";
ALTER TABLE "new_FAQs" RENAME TO "FAQs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
