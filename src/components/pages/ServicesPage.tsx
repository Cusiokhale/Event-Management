import ServiceForm from "../services/ServiceForm";
import { useSharedMessage } from "../../hooks/useSharedMessage";
import { useServices } from "../../hooks/useServices";

function ServicesPage() {
  const { sharedMessage, setSharedMessage } = useSharedMessage();

  /**
   * I.3 Architecture Use (Hook → Service → Repository)
   * - This component uses the custom hook `useServices()`.
   * - The hook calls `serviceService` methods (validation + business rules).
   * - The service calls `serviceRepository` CRUD methods (data access).
   * Why: Keeps UI focused on rendering, centralizes validation/business logic,
   * and prepares the app for backend integration in later modules.
   */
  const { services, addService, removeService } = useServices();

  function handleAddService(name: string, category: string) {
    // Validate first (your preference)
    const trimmedName = name.trim();
    const trimmedCategory = category.trim();

    if (trimmedName.length === 0 || trimmedCategory.length === 0) {
      setSharedMessage("Please enter both service name and category.");
      return;
    }

    // Act after validation (through hook → service → repository)
    addService(trimmedName, trimmedCategory);
    setSharedMessage(`Last added service: ${trimmedName}`);
  }

  function handleRemoveService(id: string) {
    removeService(id);
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
          <ServiceForm onAddService={handleAddService} />
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