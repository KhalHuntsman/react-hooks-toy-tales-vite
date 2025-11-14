import React from "react";

function ToyCard({ toy, onDeleteToy = () => {}, onUpdateToy = () => {} }) {
  // Deletes the toy on button click
  function handleDelete() {
    // Send DELETE request to backend
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then(() => {
        // Tests expect immediate removal from UI
        onDeleteToy(toy.id);
      });
  }

  // Handles increasing likes
  function handleLike() {
    const newLikes = toy.likes + 1;

    // ⭐ Optimistically update UI before server responds
    // The tests require the UI to change instantly
    onUpdateToy({ ...toy, likes: newLikes });

    // Persist the like change to backend
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ likes: newLikes })
    })
      .then((r) => r.json())
      .then((updatedToy) => {
        // Update state again to match server's final data
        onUpdateToy(updatedToy);
      });
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>

      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />

      {/* 
        Tests require a trailing space ("Likes ") 
        Without it, AllToys.test.jsx will fail 
      */}
      <p>{toy.likes} Likes </p>

      <button className="like-btn" onClick={handleLike}>
        Like {"<3"}
      </button>

      <button className="del-btn" onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
