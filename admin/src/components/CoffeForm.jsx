import React, { useState } from "react";

export default function CoffeForm({ onFormSubmit }) {
  const [coffeName, setCoffeName] = useState("");
  const [coffePrice, setCoffePrice] = useState("");
  const [coffeDescription, setCoffeDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(coffeName, coffePrice, coffeDescription);
    setCoffeName("");
    setCoffePrice("");
    setCoffeDescription("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Coffe Name"
          onChange={(e) => setCoffeName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Coffe Price"
          onChange={(e) => setCoffePrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Coffe Description"
          onChange={(e) => setCoffeDescription(e.target.value)}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
