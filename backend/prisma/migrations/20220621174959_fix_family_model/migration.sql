/*
  Warnings:

  - You are about to drop the column `familyId` on the `Customer` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_familyId_fkey";

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "familyId";

-- AlterTable
ALTER TABLE "Family" ADD COLUMN     "customerId" UUID;

-- AddForeignKey
ALTER TABLE "Family" ADD CONSTRAINT "Family_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
