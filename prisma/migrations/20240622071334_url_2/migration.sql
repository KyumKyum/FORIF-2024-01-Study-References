/*
  Warnings:

  - Made the column `youtubeUrl` on table `memory` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "memory" ALTER COLUMN "youtubeUrl" SET NOT NULL;
