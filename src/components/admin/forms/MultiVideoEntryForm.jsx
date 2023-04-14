import React, { useState } from "react";
import SeriesSeasonForm from "./SeriesSeasonForm";

export default function MultiVideoEntryForm({
  currentEntry,
  handleEntryEvent,
}) {
  const [cast, setCast] = useState(currentEntry.cast);
  const [description, setDescription] = useState(currentEntry.description);
  const [genres, setGenres] = useState(currentEntry.genres);
  const [image, setImage] = useState(currentEntry.image);
  const [name, setName] = useState(currentEntry.name);
  const [seasons, setSeasons] = useState(currentEntry.seasons);
  const [year, setYear] = useState(currentEntry.year);

  function handleFormSubmit() {
    const newEntry = {
      id: currentEntry.id,
      cast: cast,
      description: description,
      genres: genres,
      image: image,
      name: name,
      seasons: seasons,
      year: year,
    };
    handleEntryEvent(newEntry);
  }

  const season = seasons.map((season, index) => {
    return (
      <div key={index}>
        <SeriesSeasonForm
          index={index}
          season={season}
          seasons={seasons}
          setSeasons={setSeasons}
        />
      </div>
    );
  });

  function addSeason(event) {
    event.preventDefault();

    const newSeason = {
      season: "",
      episodes: [{}],
    };
    setSeasons([...seasons, newSeason]);
  }

  return (
    <div className="forms">
      <form className="add-form">
        <div className="form-title">
          <h3>Add a new entry to Netflix:</h3>
        </div>
        <div className="form-inputs">
          <label className="add-form-label">
            Entry name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label className="add-form-label">
            Entry description:
            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <label className="add-form-label">
            Entry Year:
            <input
              type="text"
              value={year}
              onChange={(event) => setYear(event.target.value)}
            />
          </label>
          <label className="add-form-label">
            Entry Cast:
            <input
              type="text"
              value={cast}
              onChange={(event) => setCast(event.target.value)}
            />
          </label>
          <label className="add-form-label">
            Entry Genres:
            <input
              type="text"
              value={genres}
              onChange={(event) => setGenres(event.target.value)}
            />
          </label>
          <label className="add-form-label">
            Entry Image link:
            <input
              type="text"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
          </label>
          <h4>Seasons</h4>
          {season}

          <button className="add-season-btn" onClick={(event) => addSeason(event)}>
            Add Season
          </button>
        </div>
      </form>
      <div className="form-button">
        <button className="add-button" onClick={handleFormSubmit}>
          Save Entry
        </button>
      </div>
    </div>
  );
}
