/*
  Warnings:

  - You are about to drop the `cities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "cities";

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "faName" TEXT NOT NULL,
    "enNAME" TEXT NOT NULL DEFAULT 'Mohammad',

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Provinces" (
    "id" SERIAL NOT NULL,
    "appAction" BOOLEAN NOT NULL DEFAULT true,
    "createdAT" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAT" TIMESTAMPTZ(3),
    "faName" TEXT NOT NULL,
    "isCapital" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Provinces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cities" (
    "id" SERIAL NOT NULL,
    "appAction" BOOLEAN NOT NULL DEFAULT true,
    "createdAT" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAT" TIMESTAMPTZ(3),
    "faName" TEXT NOT NULL,
    "isCapital" BOOLEAN NOT NULL DEFAULT false,
    "PROCINCEId" INTEGER NOT NULL,

    CONSTRAINT "Cities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cities" ADD CONSTRAINT "Cities_PROCINCEId_fkey" FOREIGN KEY ("PROCINCEId") REFERENCES "Provinces"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
