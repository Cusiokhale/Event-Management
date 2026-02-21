export type RsvpStatus = "Going" | "Maybe" | "Not going";

export type RsvpItem = {
  id: string;
  guestName: string;
  email: string;
  status: RsvpStatus;
  createdAt: string;
};