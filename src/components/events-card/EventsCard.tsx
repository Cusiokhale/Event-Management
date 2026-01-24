import type { JSX } from "react";
import "./EventsCard.css";

type Event = {
  id: number;
  name: string;
  date: string;
  location: string;
};

export default function EventsCard(): JSX.Element {
  const events: Event[] = [
    { id: 1, name: "Tech Meetup", date: "Feb 10, 2026", location: "Winnipeg" },
    { id: 2, name: "Nigerian Wedding", date: "Feb 18, 2026", location: "Winnipeg" },
    { id: 3, name: "Fullstack Developers Expo", date: "Mar 5, 2026", location: "Red River" },
  ];

  return (
    <section className="events">
      <h2 className="title">Upcoming Events</h2>

      {events.map((event) => (
        <div className="card" key={event.id}>
          <h3>{event.name}</h3>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
        </div>
      ))}c
    </section>
  );
}
