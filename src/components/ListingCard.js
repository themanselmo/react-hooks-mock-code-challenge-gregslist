import React, { useState } from "react";

function ListingCard({ onDelete, listing, listing: {description, image="https://via.placeholder.com/300x300", location} }) {
  const [isFav, setIsFav] = useState(false)

  function handleFavClick() {
    setIsFav(!isFav)
  }

  function handleDelete(listing) {
    console.log('deleting: ', listing)
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(onDelete(listing))
  }

return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFav ? (
          <button  onClick={handleFavClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => handleDelete(listing)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
