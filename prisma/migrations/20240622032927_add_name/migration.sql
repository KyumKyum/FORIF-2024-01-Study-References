/*
  Warnings:

  - Added the required column `name` to the `memory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "memory" ADD COLUMN     "name" TEXT NOT NULL;
