import prisma from "../../../prisma.js";

export const getAllServices = async () => {
  return prisma.service.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createService = async (name: string, category: string) => {
  return prisma.service.create({
    data: {
      name,
      category,
    },
  });
};

export const deleteServiceById = async (id: number) => {
  return prisma.service.delete({
    where: {
      id,
    },
  });
};
