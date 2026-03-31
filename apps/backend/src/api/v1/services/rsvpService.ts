import prisma from "../../../prisma.js";

export const getAllRsvps = async () => {
  return prisma.rsvp.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createRsvp = async (
  guestName: string,
  email: string,
  status: string,
) => {
  return prisma.rsvp.create({
    data: {
      guestName,
      email,
      status,
    },
  });
};

export const deleteRsvpById = async (id: string) => {
  return prisma.rsvp.delete({
    where: {
      id,
    },
  });
};