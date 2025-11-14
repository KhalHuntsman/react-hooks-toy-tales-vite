import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  // Holds all toy objects fetched from the server
  const [toys, setToys] = useState([]);

  // Controls whether the "Add Toy" form is shown
  const [showForm, setShowForm] = useState(false);

  // Toggles the form open/closed
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // Fetch all toys on initial render
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((toyData) => setToys(toyData));
  }, []);

  // Adds a newly created toy to state
  function handleAddToy(newToy) {
    setToys((prevToys) => [...prevToys, newToy]);
  }

  // Removes a toy after it is deleted (donated)
  function handleDeleteToy(id) {
    setToys((prevToys) => prevToys.filter((toy) => toy.id !== id));
  }

  // Updates a single toy (needed for likes)
  // Uses map() to maintain the order of toys
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

      {/* Conditionally show the "Create Toy" form */}
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}

      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>

      {/* Pass state handlers into the container */}
      <ToyContainer
        toys={toys}
        onDeleteToy={handleDeleteToy}
        onUpdateToy={handleUpdateToy}
      />
    </>
  );
}

export default App;
