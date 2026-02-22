import type { RsvpItem } from "../types/rsvp";

export const rsvpTestData: RsvpItem[] = [
  {
    id: crypto.randomUUID(),
    guestName: "Sarah Johnson",
    email: "sarah@example.com",
    status: "Going",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    guestName: "Michael Brown",
    email: "michael@example.com",
    status: "Maybe",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    guestName: "Emily Davis",
    email: "emily@example.com",
    status: "Not going",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    guestName: "James Wilson",
    email: "james@example.com",
    status: "Going",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    guestName: "Olivia Martinez",
    email: "olivia@example.com",
    status: "Maybe",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    guestName: "Daniel Taylor",
    email: "daniel@example.com",
    status: "Going",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    guestName: "Sophia Anderson",
    email: "sophia@example.com",
    status: "Not going",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    guestName: "Matthew Thomas",
    email: "matthew@example.com",
    status: "Maybe",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    guestName: "Isabella Moore",
    email: "isabella@example.com",
    status: "Going",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    guestName: "William Jackson",
    email: "william@example.com",
    status: "Not going",
    createdAt: new Date().toISOString(),
  },
];