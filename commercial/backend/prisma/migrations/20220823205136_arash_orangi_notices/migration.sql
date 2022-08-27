-- CreateTable
CREATE TABLE "Noticess" (
    "id" SERIAL NOT NULL,
    "tiile" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Noticess_pkey" PRIMARY KEY ("id")
);
