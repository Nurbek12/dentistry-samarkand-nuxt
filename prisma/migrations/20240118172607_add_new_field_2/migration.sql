-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Doctor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "thumb" TEXT,
    "specialty" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "phone" TEXT,
    "tg" TEXT NOT NULL,
    "inst" TEXT NOT NULL,
    "fb" TEXT NOT NULL,
    "in" TEXT NOT NULL,
    "publish" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_Doctor" ("created_at", "education", "experience", "fb", "id", "image", "in", "inst", "name", "phone", "publish", "specialty", "tg", "thumb", "updated_at") SELECT "created_at", "education", "experience", "fb", "id", "image", "in", "inst", "name", "phone", "publish", "specialty", "tg", "thumb", "updated_at" FROM "Doctor";
DROP TABLE "Doctor";
ALTER TABLE "new_Doctor" RENAME TO "Doctor";
CREATE TABLE "new_Service" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "icon" TEXT,
    "thumb" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "publish" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_Service" ("created_at", "description", "icon", "id", "price", "publish", "title", "updated_at") SELECT "created_at", "description", "icon", "id", "price", "publish", "title", "updated_at" FROM "Service";
DROP TABLE "Service";
ALTER TABLE "new_Service" RENAME TO "Service";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
