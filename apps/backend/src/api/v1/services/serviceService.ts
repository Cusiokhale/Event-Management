import prisma from "../../../prisma.js";

async function getOrCreateUser(clerkId: string) {
  return prisma.user.upsert({
    where: { clerkId },
    update: {},
    create: { clerkId },
  });
}

export const getAllServices = async (clerkId: string) => {
  const user = await getOrCreateUser(clerkId);

  return prisma.service.findMany({
    where: {
      userId: user.id,
    },
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createService = async (
  clerkId: string,
  name: string,
  category: string
) => {
  const user = await getOrCreateUser(clerkId);

  return prisma.service.create({
    data: {
      name,
      userId: user.id,
      category: {
        connectOrCreate: {
          where: {
            name: category,
          },
          create: {
            name: category,
          },
        },
      },
    },
    include: {
      category: true,
    },
  });
};

export const deleteServiceById = async (clerkId: string, id: number) => {
  const user = await getOrCreateUser(clerkId);

  return prisma.service.deleteMany({
    where: {
      id,
      userId: user.id,
    },
  });
};