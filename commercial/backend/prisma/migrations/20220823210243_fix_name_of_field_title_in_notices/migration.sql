/*
  Warnings:

  - You are about to drop the column `tiile` on the `Noticess` table. All the data in the column will be lost.
  - Added the required column `title` to the `Noticess` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Noticess" DROP COLUMN "tiile",
ADD COLUMN     "title" TEXT NOT NULL;
