-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_doctor_id_fkey";

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "doctor_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Service_Category" ADD COLUMN     "publish" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Specialty" ADD COLUMN     "publish" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Stock" ADD COLUMN     "publish" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
