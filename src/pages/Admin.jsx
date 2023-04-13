import React, { useState } from "react";
import NewEntryForm from "../components/admin/forms/NewEntryForm";
import AdminEntryView from "../components/admin/AdminEntryView";
import AdminModal from "../components/admin/AdminModal";
import { useMovies } from "../state/Movies/MoviesContextProvider";
import { useSeries } from "../state/Series/SeriesContextProvider";
import { useDocumentaries } from "../state/Documentaries/DocumentariesContextProvider";
import { createMovie } from "../scripts/moviesCollection";
import { createSeries } from "../scripts/seriesCollection";
import { createDocumentary } from "../scripts/documentariesCollection";


export default function Admin() {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("");

  const { moviesDispatch } = useMovies();
  const { seriesDispatch } = useSeries();
  const { documentariesDispatch } = useDocumentaries();

  const entryOptions = ["Movie", "Series", "Documentary"]
  const options = entryOptions.map((option, index) => <option key={index}>{option}</option>);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Add Entry</button>
      <AdminModal open={isOpen} onClose={() => setIsOpen(false)} >
        <div className="form-title">
          <h3>Select a category:</h3>
        </div>
        <div className="form-inputs">
          <label className="add-form-label">
            Select Entry Category:
            <select name="categories" id="category-select" onChange={(event) => setCategory(event.target.value)}>
              <option value="">--Please choose a category--</option>
              {options}
            </select>
          </label>
        </div>
        {category === 'Movie' &&
          <NewEntryForm
            categoryName={category}
            categoryDispatch={moviesDispatch}
            addFunction={createMovie}
          />}
        {category === 'Series' &&
          <NewEntryForm
            categoryName={category}
            categoryDispatch={seriesDispatch}
            addFunction={createSeries}
          />}
        {category === 'Documentary' &&
          <NewEntryForm
            categoryName={category}
            categoryDispatch={documentariesDispatch}
            addFunction={createDocumentary}
          />}
      </AdminModal>
      <AdminEntryView />
    </div>
  )
}