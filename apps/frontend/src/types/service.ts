export type ServiceItem = {
  id: number;
  name: string;
  userId: number;
  categoryId: number;
  category: {
    id: number;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
};