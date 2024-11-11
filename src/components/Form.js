import React, { useState } from "react";

export default function Form({ onAddItem }) {
  const [descrition, setDescrition] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!descrition) return;

    const newItem = { descrition, quantity, packed: false, id: Date.now() };

    onAddItem(newItem);

    setDescrition("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        name="paking"
        type="text"
        placeholder="Item..."
        value={descrition}
        onChange={(e) => setDescrition(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
