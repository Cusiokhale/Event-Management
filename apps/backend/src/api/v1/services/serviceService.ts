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
  categoryName: string
) => {
  const user = await getOrCreateUser(clerkId);

  const category = await prisma.category.upsert({
    where: {
      name: categoryName,
    },
    update: {},
    create: {
      name: categoryName,
    },
  });

  return prisma.service.create({
    data: {
      name,
      userId: user.id,
      categoryId: category.id,
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