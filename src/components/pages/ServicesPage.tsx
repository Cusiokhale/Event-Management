import { useState } from "react";
import ServiceForm from "../services/ServiceForm";

type ServicesPageProps = {
  sharedMessage?: string;
  setSharedMessage?: (newMessage: string) => void;
};

type ServiceItem = {
  id: string;
  name: string;
  category: string;
};

function ServicesPage({ sharedMessage, setSharedMessage }: ServicesPageProps) {
  // List state stays in the page (page "owns" the data)
  const [services, setServices] = useState<ServiceItem[]>([
    { id: crypto.randomUUID(), name: "Wedding Planning", category: "Events" },
    { id: crypto.randomUUID(), name: "Corporate Conference", category: "Business" },
  ]);

  // NEW: called by the child form component via props
  function addService(name: string, category: string) {
    const newService: ServiceItem = {
      id: crypto.randomUUID(),
      name,
      category,
    };

    setServices((prev) => [newService, ...prev]);

    // Optional: proves shared state updates across pages (T.3)
    if (setSharedMessage) {
      setSharedMessage(`Last added service: ${name}`);
    }
  }

  function handleRemoveService(id: string) {
    setServices((prev) => prev.filter((s) => s.id !== id));
  }

  return (
  <div className="page">
    <div className="page__container">
      <h2 className="page__title">Services Page</h2>

      {sharedMessage ? (
        <p className="page__shared">
          <strong>Shared:</strong> {sharedMessage}
        </p>
      ) : null}

      <section className="card">
        <h3 className="card__title">Add a Service</h3>
        <ServiceForm onAddService={addService} />
      </section>

      <section className="card">
        <h3 className="card__title">My Services</h3>

        {services.length === 0 ? (
          <p className="muted">No services yet. Add one above.</p>
        ) : (
          <ul className="list">
            {services.map((service) => (
              <li className="list__item" key={service.id}>
                <div className="list__text">
                  <strong>{service.name}</strong>
                  <span className="muted"> — {service.category}</span>
                </div>

                <button
                  className="btn btn--danger"
                  type="button"
                  onClick={() => handleRemoveService(service.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  </div>
)}

export default ServicesPage;
