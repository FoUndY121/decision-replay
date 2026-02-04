-- CreateTable
CREATE TABLE "Replay" (
    "id" TEXT NOT NULL,
    "decisionId" TEXT NOT NULL,
    "whatHappened" TEXT,
    "whatIThought" TEXT,
    "whatIMissed" TEXT,
    "lessons" TEXT,
    "nextTime" TEXT,
    "score" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Replay_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Replay_decisionId_createdAt_idx" ON "Replay"("decisionId", "createdAt");

-- CreateIndex
CREATE INDEX "Replay_deletedAt_idx" ON "Replay"("deletedAt");

-- AddForeignKey
ALTER TABLE "Replay" ADD CONSTRAINT "Replay_decisionId_fkey" FOREIGN KEY ("decisionId") REFERENCES "Decision"("id") ON DELETE CASCADE ON UPDATE CASCADE;
