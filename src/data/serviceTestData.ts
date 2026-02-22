import type { ServiceItem } from "../types/service";

export const serviceTestData: ServiceItem[] = [
  {
    id: crypto.randomUUID(),
    name: "Wedding Planning",
    category: "Events",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    name: "Corporate Conference",
    category: "Business",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    name: "Birthday Party Planning",
    category: "Events",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    name: "Product Launch Event",
    category: "Marketing",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    name: "School Graduation",
    category: "Education",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    name: "Charity Fundraiser",
    category: "Community",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    name: "Music Concert",
    category: "Entertainment",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    name: "Networking Meetup",
    category: "Business",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    name: "Tech Workshop",
    category: "Education",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    name: "Anniversary Celebration",
    category: "Private",
    createdAt: new Date().toISOString(),
  },
];