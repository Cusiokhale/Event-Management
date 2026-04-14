import prisma from "../../../prisma.js";

async function getOrCreateUser(clerkId: string) {
  return prisma.user.upsert({
    where: { clerkId },
    update: {},
    create: { clerkId },
  });
}

export const getAllRsvps = async (clerkId: string) => {
  const user = await getOrCreateUser(clerkId);

  return prisma.rsvp.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createRsvp = async (
  clerkId: string,
  guestName: string,
  email: string,
  status: string
) => {
  const user = await getOrCreateUser(clerkId);

  return prisma.rsvp.create({
    data: {
      guestName,
      email,
      status,
      userId: user.id,
    },
  });
};

export const deleteRsvpById = async (clerkId: string, id: number) => {
  const user = await getOrCreateUser(clerkId);

  return prisma.rsvp.deleteMany({
    where: {
      id,
      userId: user.id,
    },
  });
};