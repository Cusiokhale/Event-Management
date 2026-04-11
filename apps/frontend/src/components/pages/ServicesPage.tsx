import ServiceForm from "../services/ServiceForm";
import { useSharedMessage } from "../../hooks/useSharedMessage";
import { useServices } from "../../hooks/useServices";

function ServicesPage() {
  const { sharedMessage, setSharedMessage } = useSharedMessage();
  const { services, addService, removeService } = useServices();

  async function handleAddService(name: string, category: string) {
    const trimmedName = name.trim();
    const trimmedCategory = category.trim();

    if (trimmedName.length === 0 || trimmedCategory.length === 0) {
      setSharedMessage("Please enter both service name and category.");
      return;
    }

    await addService(trimmedName, trimmedCategory);
    setSharedMessage(`Last added service: ${trimmedName}`);
  }

  async function handleRemoveService(id: number) {
    await removeService(id);
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
                    <span className="muted"> — {service.category.name}</span>
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
