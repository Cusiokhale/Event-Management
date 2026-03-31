type RsvpItem = {
  id: string;
  guestName: string;
  email: string;
  status: string;
  createdAt: string;
};

let rsvps: RsvpItem[] = [];

export const getAllRsvps = async () => {
  return [...rsvps];
};

export const createRsvp = async (
  guestName: string,
  email: string,
  status: string,
) => {
  const newRsvp: RsvpItem = {
    id: crypto.randomUUID(),
    guestName,
    email,
    status,
    createdAt: new Date().toISOString(),
  };

  rsvps = [newRsvp, ...rsvps];
  return newRsvp;
};

export const deleteRsvpById = async (id: string) => {
  rsvps = rsvps.filter((rsvp) => rsvp.id !== id);
};