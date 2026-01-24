export type RsvpItem = {
  id: string;
  eventId: string;
  eventTitle: string;
  guestName: string;
  guestEmail: string;
  status: "Going" | "Maybe" | "Not going";
  createdAt: string;
};
