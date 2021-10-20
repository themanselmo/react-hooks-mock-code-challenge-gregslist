import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */
          listings.map(item => <ListingCard key={item.id} listing={item} onDelete={onDelete}/>)
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
