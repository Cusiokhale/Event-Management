import { useState } from "react";
import ServiceForm from "../services/ServiceForm";
import { useSharedMessage } from "../../hooks/useSharedMessage";
import { serviceRepository } from "../../repositories/serviceRepository";
import type { ServiceItem } from "../../types/service";

function ServicesPage() {
  const { sharedMessage, setSharedMessage } = useSharedMessage();

  // Initialize from repository (external resource simulation)
  const [services, setServices] = useState<ServiceItem[]>(() =>
    serviceRepository.getAll()
  );

  function addService(name: string, category: string) {
    // Validate first (as you prefer)
    const trimmedName = name.trim();
    const trimmedCategory = category.trim();

    if (trimmedName.length === 0 || trimmedCategory.length === 0) {
      setSharedMessage("Please enter both service name and category.");
      return;
    }

    // Act after validation (via repository)
    const newService = serviceRepository.create(
      trimmedName,
      trimmedCategory
    );

    // Refresh UI from repository
    setServices(serviceRepository.getAll());

    setSharedMessage(`Last added service: ${newService.name}`);
  }

  function handleRemoveService(id: string) {
    serviceRepository.delete(id);

    // Refresh UI from repository
    setServices(serviceRepository.getAll());

    setSharedMessage("Service removed.");
  }

  return (
    <div className="page">
      <div className="page__container">
        <h2 className="page__title">Services Page</h2>

        <p className="page__shared">
          <strong>Shared:</strong> {sharedMessage}
        </p>

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
  );
}

export default ServicesPage;