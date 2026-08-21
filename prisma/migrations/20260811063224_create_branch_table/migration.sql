-- CreateTable
CREATE TABLE "branch" (
    "id" SERIAL NOT NULL,
    "branchName" VARCHAR(100) NOT NULL,
    "regionId" INTEGER NOT NULL,
    "address" VARCHAR(200),
    "status" INTEGER NOT NULL DEFAULT 0,
    "createdBy" VARCHAR(80),
    "editBy" VARCHAR(80),

    CONSTRAINT "branch_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "branch" ADD CONSTRAINT "branch_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
