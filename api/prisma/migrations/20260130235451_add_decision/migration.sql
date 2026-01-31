-- CreateEnum
CREATE TYPE "DecisionStatus" AS ENUM ('draft', 'final', 'archived');

-- CreateTable
CREATE TABLE "Decision" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "context" TEXT,
    "status" "DecisionStatus" NOT NULL DEFAULT 'draft',
    "importance" INTEGER NOT NULL DEFAULT 3,
    "confidence" INTEGER NOT NULL DEFAULT 3,
    "decidedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),
    "outcome" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Decision_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Decision_status_decidedAt_idx" ON "Decision"("status", "decidedAt");

-- CreateIndex
CREATE INDEX "Decision_deletedAt_idx" ON "Decision"("deletedAt");
