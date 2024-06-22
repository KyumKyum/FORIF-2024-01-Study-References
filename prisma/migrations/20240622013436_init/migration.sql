-- CreateTable
CREATE TABLE "memory" (
    "id" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "memory_pkey" PRIMARY KEY ("id")
);
