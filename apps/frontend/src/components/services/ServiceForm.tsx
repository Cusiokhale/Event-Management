import { useState } from "react";

type ServiceFormProps = {
  onAddService: (name: string, category: string) => void;
};

function ServiceForm({ onAddService }: ServiceFormProps) {
  const [serviceName, setServiceName] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const name = serviceName.trim();
    const cat = category.trim();

    if (!name || !cat) return;

    onAddService(name, cat);
    setServiceName("");
    setCategory("");
  }

  return (
  <form className="form" onSubmit={handleSubmit}>
    <div className="form__group">
      <label className="form__label" htmlFor="serviceName">Service name</label>
      <input
        className="form__input"
        id="serviceName"
        value={serviceName}
        onChange={(e) => setServiceName(e.target.value)}
        placeholder="e.g., Birthday Party Planning"
      />
    </div>

    <div className="form__group">
      <label className="form__label" htmlFor="category">Category</label>
      <input
        className="form__input"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="e.g., Events"
      />
    </div>

    <button className="btn" type="submit">Add Service</button>
  </form>
);

}

export default ServiceForm;
