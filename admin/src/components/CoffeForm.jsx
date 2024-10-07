import React, { useRef, useState } from "react";

export default function CoffeForm({
  onFormSubmit,
  coffeName,
  coffePrice,
  coffeDescription,
}) {
  const coffeNameRef = useRef();
  const coffePriceRef = useRef();
  const coffeDescriptionRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(
      coffeNameRef.current.value,
      coffePriceRef.current.value,
      coffeDescriptionRef.current.value
    );
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Coffe Name"
          defaultValue={coffeName}
          ref={coffeNameRef}
          required
        />
        <input
          type="number"
          placeholder="Coffe Price"
          defaultValue={coffePrice}
          ref={coffePriceRef}
          required
        />
        <input
          type="text"
          placeholder="Coffe Description"
          defaultValue={coffeDescription}
          ref={coffeDescriptionRef}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
