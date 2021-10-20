import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useState, useEffect } from "react"

function App() {
  const [listings, setListings] = useState([])
  const [searchFilter, setSearchFilter] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(data => setListings(data))
  }, [])

  function updateAfterDelete(listing) {
    const updatedListings = listings.filter(item => item.id !== listing.id)
    setListings(updatedListings)
  }

  const displaySearchListings = () => {
    if(searchFilter === '') {
      return listings
    } else {
      return listings.filter(item => item.description.includes(searchFilter))
    }
  }

  return (
    <div className="app">
      <Header setSearch={setSearchFilter} searchValue={searchFilter}/>
      <ListingsContainer listings={displaySearchListings()} onDelete={updateAfterDelete}/>
    </div>
  );
}

export default App;
