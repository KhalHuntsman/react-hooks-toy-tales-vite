import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  // Controlled input state for the form fields
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload

    // The backend expects likes to start at 0
    const newToy = {
      name: name,
      image: image,
      likes: 0
    };

    // POST to backend to create new toy
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
      .then((r) => r.json())
      .then((savedToy) => {
        // Add the newly created toy into App state
        onAddToy(savedToy);

        // Clear form inputs
        setName("");
        setImage("");
      });
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>

        {/* Controlled input for toy name */}
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        {/* Controlled input for toy image URL */}
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />

        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
