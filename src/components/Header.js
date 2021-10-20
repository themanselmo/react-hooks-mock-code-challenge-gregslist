import React from "react";
import Search from "./Search";

function Header({ setSearch, searchValue }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearch={setSearch} searchValue={searchValue}/>
    </header>
  );
}

export default Header;
