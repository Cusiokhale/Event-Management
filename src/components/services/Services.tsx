import type { JSX } from "react";
import "./Services.css";

type Service = {
  id: number;
  name: string;
  description: string;
  priceFrom: string;
};

export default function Services(): JSX.Element {
  const services: Service[] = [
    {
      id: 1,
      name: "Venue Selection",
      description: "Shortlist venues and trusted vendors based on your budget.",
      priceFrom: "$500",
    },
    {
      id: 2,
      name: "Full Event Planning",
      description: "End-to-end planning support: timeline, vendors, and logistics.",
      priceFrom: "$1,200",
    },
    {
      id: 3,
      name: "Day-Of Coordination",
      description: "On-site coordination to keep your event running smoothly.",
      priceFrom: "$800",
    },
  ];

  return (
    <section className="services">
      <h2 id="services-title">Our Services</h2>

      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>
              <strong>From:</strong> {service.priceFrom}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
