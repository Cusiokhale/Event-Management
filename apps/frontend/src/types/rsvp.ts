export type RsvpStatus = "Going" | "Maybe" | "Not going";

export type RsvpItem = {
  id: number;
  guestName: string;
  email: string;
  status: RsvpStatus;
  createdAt: string;
  updatedAt: string;
};