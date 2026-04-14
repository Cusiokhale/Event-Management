/*
  Warnings:

  - You are about to drop the column `event` on the `Rsvp` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Rsvp` table. All the data in the column will be lost.
  - Added the required column `guestName` to the `Rsvp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rsvp" DROP COLUMN "event",
DROP COLUMN "name",
ADD COLUMN     "guestName" TEXT NOT NULL;
