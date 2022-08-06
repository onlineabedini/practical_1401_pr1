-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "appAction" BOOLEAN NOT NULL DEFAULT true,
    "userName" TEXT NOT NULL,
    "firstnameName" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
