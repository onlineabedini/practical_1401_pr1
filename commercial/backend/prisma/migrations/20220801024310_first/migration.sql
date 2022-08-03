-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "faName" TEXT NOT NULL,
    "enNAME" TEXT NOT NULL DEFAULT 'jack',

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);
