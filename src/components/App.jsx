import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((toyData) => setToys(toyData));
  }, []);

  // Add a toy to state
  function handleAddToy(newToy) {
    setToys((prevToys) => [...prevToys, newToy]);
  }

  // Remove toy from state
  function handleDeleteToy(id) {
    setToys((prevToys) => prevToys.filter((toy) => toy.id !== id));
  }
  
  // Update toy in state
  function handleUpdateToy(updatedToy) {
  setToys((prevToys) =>
    prevToys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    )
  );
}

  return (
    <>
      <Header />

      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}

      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>

      <ToyContainer toys={toys} />
    </>
  );
}

export default App;
