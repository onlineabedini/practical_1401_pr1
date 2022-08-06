/*
  Warnings:

  - The `phone` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "phone",
ADD COLUMN     "phone" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
