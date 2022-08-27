/*
  Warnings:

  - You are about to drop the `Cities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Person` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Provinces` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "GENDERS" AS ENUM ('MAN', 'WOMAN');

-- DropForeignKey
ALTER TABLE "Cities" DROP CONSTRAINT "Cities_PROCINCEId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "gender" "GENDERS" NOT NULL DEFAULT 'MAN',
ALTER COLUMN "email" DROP NOT NULL;

-- DropTable
DROP TABLE "Cities";

-- DropTable
DROP TABLE "Person";

-- DropTable
DROP TABLE "Provinces";

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
