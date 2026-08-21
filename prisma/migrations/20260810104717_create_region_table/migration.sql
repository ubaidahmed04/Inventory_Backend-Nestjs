-- CreateTable
CREATE TABLE "region" (
    "id" SERIAL NOT NULL,
    "regionName" VARCHAR(100) NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0,
    "createdBy" VARCHAR(80),
    "editBy" VARCHAR(80),

    CONSTRAINT "region_pkey" PRIMARY KEY ("id")
);
