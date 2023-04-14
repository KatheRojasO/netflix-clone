import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDocumentaries } from "../state/Documentaries/DocumentariesContextProvider";
import { useMovies } from "../state/Movies/MoviesContextProvider";
import { useSeries } from "../state/Series/SeriesContextProvider";

export default function SearchBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const [input, setInput] = useState("");
  const { movies, dispatch } = useMovies();
  const { series } = useSeries();
  const { documentaries } = useDocumentaries();

  let inputHandler = (e) => {
    setInput(e.target.value);
    let search = movies.filter((video) =>{
      return Object.values(video.name, video.genres)
        .join('')
        .toLocaleLowerCase()
        .includes(input.toLocaleLowerCase());
    });

   
    // setSearchedVideos(search);
  }

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
          <SearchIcon className="search-icon" />
        </button>
        <input
          // onChange={inputHandler}
          value={input}
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
