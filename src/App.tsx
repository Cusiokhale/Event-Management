import { useState, useMemo, useEffect } from 'react';
import './App.css'
import EventsCard from "./components/events-card/EventsCard";
import RsvpForm from './components/RsvpForm';
import Services from "./components/services/Services";
import type { RsvpItem } from './types/rsvp';

function App() {
  const [rsvps, setRsvps] = useState<RsvpItem[]>([]);

  // For now, sample events. Later, we can replace with real events from your app state (T3).
  const events = useMemo(
    () => [
      { id: "ev-1", title: "Tech Meetup" },
      { id: "ev-2", title: "Career Workshop" },
      { id: "ev-3", title: "Birthday Party" },
    ],
    []
  );

  const addRsvp = (item: RsvpItem) => setRsvps((prev) => { return [item, ...prev]});

  useEffect(() => {
    console.log('Rsvp => ', rsvps)
  })
  return (
    <div className="app">
      <header className="app__header">
        <h1>Event Management Website</h1>
        <p>Conferences • Weddings • School Events</p>
      </header>

      <main className="app__main">
        <p>Turning Moments into Memories!</p>
      </main>
      
      <main>
        <EventsCard />
        <Services />

        <RsvpForm events={events} onAdd={addRsvp} />
      </main>

      <footer className="app__footer">
        <p>Team: Ace Stack</p>
        <p>Members: Nkechi Echeta, Cordelia Usiokhale</p>
      </footer>
    </div>
  )
}

export default App
