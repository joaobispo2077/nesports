/*
  Warnings:

  - You are about to drop the column `useVoicheChannel` on the `Ad` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ad" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "yearsPlaying" INTEGER NOT NULL,
    "discord" TEXT NOT NULL,
    "weekDays" TEXT NOT NULL,
    "hoursStart" INTEGER NOT NULL,
    "hoursEnd" INTEGER NOT NULL,
    "useVoiceChannel" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "gameId" TEXT NOT NULL,
    CONSTRAINT "Ad_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Ad" ("createdAt", "discord", "gameId", "hoursEnd", "hoursStart", "id", "name", "updatedAt", "weekDays", "yearsPlaying") SELECT "createdAt", "discord", "gameId", "hoursEnd", "hoursStart", "id", "name", "updatedAt", "weekDays", "yearsPlaying" FROM "Ad";
DROP TABLE "Ad";
ALTER TABLE "new_Ad" RENAME TO "Ad";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
