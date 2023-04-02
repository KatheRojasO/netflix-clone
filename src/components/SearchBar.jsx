import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  return (
    <div className="search-bar">
      <div className={`search ${showSearch ? "show-search" : ""}`}>
        <button
          onFocus={() => setShowSearch(true)}
          onBlur={() => {
            if (!inputHover) {
              setShowSearch(false);
            }
          }}
        >
          <SearchIcon className="search-icon"/>
        </button>
        <input
          type="text"
          placeholder="Titles, genres"
          onMouseEnter={() => setInputHover(true)}
          onMouseLeave={() => setInputHover(false)}
          onBlur={() => {
            setShowSearch(false);
            setInputHover(false);
          }}
        />
      </div>
    </div>
  );
}
