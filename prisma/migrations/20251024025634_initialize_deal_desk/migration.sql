-- CreateEnum
CREATE TYPE "Role" AS ENUM ('LEAD', 'CLIENT', 'ADMIN');

-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('CTV', 'OLV', 'DISPLAY', 'IN_APP');

-- CreateEnum
CREATE TYPE "DealStatus" AS ENUM ('ACTIVE', 'PAUSED', 'EXPIRED', 'DRAFT');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "name" TEXT,
    "company" TEXT,
    "role" "Role" NOT NULL DEFAULT 'LEAD',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deals" (
    "id" TEXT NOT NULL,
    "dealId" TEXT NOT NULL,
    "email" TEXT,
    "company" TEXT NOT NULL,
    "dsp" TEXT NOT NULL,
    "seatId" TEXT NOT NULL,
    "flightStart" TIMESTAMP(3),
    "flightEnd" TIMESTAMP(3),
    "alwaysOn" BOOLEAN NOT NULL DEFAULT false,
    "mediaType" "MediaType" NOT NULL,
    "geoTargeting" JSONB,
    "idealInventory" TEXT NOT NULL,
    "aiAnalysis" TEXT,
    "status" "DealStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "deals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dsps" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "dsps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seat_ids" (
    "id" TEXT NOT NULL,
    "seatId" TEXT NOT NULL,
    "dspId" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "seat_ids_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ctv_apps" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bundleId" TEXT NOT NULL,
    "dealId" TEXT NOT NULL,

    CONSTRAINT "ctv_apps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "domains" (
    "id" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "dealId" TEXT NOT NULL,

    CONSTRAINT "domains_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "in_app_items" (
    "id" TEXT NOT NULL,
    "appName" TEXT NOT NULL,
    "bundleId" TEXT NOT NULL,
    "dealId" TEXT NOT NULL,

    CONSTRAINT "in_app_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "states" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dmas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "dmas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "stateCode" TEXT NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "zip_codes" (
    "id" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "zip_codes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "deals_dealId_key" ON "deals"("dealId");

-- CreateIndex
CREATE UNIQUE INDEX "dsps_name_key" ON "dsps"("name");

-- CreateIndex
CREATE UNIQUE INDEX "dsps_code_key" ON "dsps"("code");

-- CreateIndex
CREATE UNIQUE INDEX "seat_ids_seatId_key" ON "seat_ids"("seatId");

-- CreateIndex
CREATE UNIQUE INDEX "ctv_apps_bundleId_key" ON "ctv_apps"("bundleId");

-- CreateIndex
CREATE UNIQUE INDEX "states_name_key" ON "states"("name");

-- CreateIndex
CREATE UNIQUE INDEX "states_code_key" ON "states"("code");

-- CreateIndex
CREATE UNIQUE INDEX "dmas_name_key" ON "dmas"("name");

-- CreateIndex
CREATE UNIQUE INDEX "dmas_code_key" ON "dmas"("code");

-- CreateIndex
CREATE UNIQUE INDEX "zip_codes_zip_key" ON "zip_codes"("zip");

-- AddForeignKey
ALTER TABLE "deals" ADD CONSTRAINT "deals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ctv_apps" ADD CONSTRAINT "ctv_apps_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "deals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "domains" ADD CONSTRAINT "domains_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "deals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "in_app_items" ADD CONSTRAINT "in_app_items_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "deals"("id") ON DELETE CASCADE ON UPDATE CASCADE;
