/*
  Warnings:

  - You are about to drop the column `annual_gross_income` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `existing_itemized_deductions` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `filing_status` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `intends_1031_exchange` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `is_real_estate_professional` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `marginal_tax_bracket` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `other_passive_income` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `planned_hold_period` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `state_of_residence` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `state_tax_rate` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `tax_profile_updated_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `use_standard_deduction` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `properties` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `property_configurations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rehab_items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `units` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."properties" DROP CONSTRAINT "properties_owner_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."property_configurations" DROP CONSTRAINT "property_configurations_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."rehab_items" DROP CONSTRAINT "rehab_items_property_configuration_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."units" DROP CONSTRAINT "units_property_configuration_id_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "annual_gross_income",
DROP COLUMN "existing_itemized_deductions",
DROP COLUMN "filing_status",
DROP COLUMN "intends_1031_exchange",
DROP COLUMN "is_real_estate_professional",
DROP COLUMN "marginal_tax_bracket",
DROP COLUMN "other_passive_income",
DROP COLUMN "planned_hold_period",
DROP COLUMN "state_of_residence",
DROP COLUMN "state_tax_rate",
DROP COLUMN "tax_profile_updated_at",
DROP COLUMN "use_standard_deduction";

-- DropTable
DROP TABLE "public"."properties";

-- DropTable
DROP TABLE "public"."property_configurations";

-- DropTable
DROP TABLE "public"."rehab_items";

-- DropTable
DROP TABLE "public"."units";

-- CreateTable
CREATE TABLE "products" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DECIMAL(12,2) NOT NULL,
    "category" TEXT NOT NULL,
    "image_url" TEXT,
    "in_stock" BOOLEAN NOT NULL DEFAULT true,
    "rating" DECIMAL(3,2),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "products_name_idx" ON "products"("name");

-- CreateIndex
CREATE INDEX "products_category_idx" ON "products"("category");

-- CreateIndex
CREATE INDEX "products_price_idx" ON "products"("price");

-- CreateIndex
CREATE INDEX "products_created_at_idx" ON "products"("created_at");
