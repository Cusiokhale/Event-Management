import type { ServiceItem } from "../types/service";

const now = new Date().toISOString();

export const serviceTestData: ServiceItem[] = [
  {
    id: 1,
    name: "Wedding Planning",
    category: "Events",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 2,
    name: "Corporate Conference",
    category: "Business",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 3,
    name: "Birthday Party Planning",
    category: "Events",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 4,
    name: "Product Launch Event",
    category: "Marketing",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 5,
    name: "School Graduation",
    category: "Education",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 6,
    name: "Charity Fundraiser",
    category: "Community",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 7,
    name: "Music Concert",
    category: "Entertainment",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 8,
    name: "Networking Meetup",
    category: "Business",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 9,
    name: "Tech Workshop",
    category: "Education",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 10,
    name: "Anniversary Celebration",
    category: "Private",
    createdAt: now,
    updatedAt: now,
  },
];