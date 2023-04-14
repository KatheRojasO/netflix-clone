import { React, useState, useEffect } from "react";
import SeriesSeasonEpisodesForm from "./SeriesSeasonEpisodesForm";

export default function SeriesSeasonForm({
  index,
  season,
  seasons,
  setSeasons,
}) {
  const [episodes, setEpisodes] = useState(season.episodes);

  function handleSeasonFormChange(name, value) {
    let seasonsData = [...seasons];
    seasonsData[index][name] = value;
    setSeasons(seasonsData);
  }

  useEffect(() => {
    handleSeasonFormChange("episodes", episodes);
  }, [episodes]);

  function addSeason() {
    const newSeason = {
      season: "",
      episodes: [{}],
    };
    setSeasons([...seasons, newSeason]);
  }

  return (
    <div>
      <label className="add-form-label">
        Season Name:
        <input
          name="season"
          type="text"
          value={season.season}
          onChange={(event) =>
            handleSeasonFormChange(event.target.name, event.target.value)
          }
        />
      </label>
      <SeriesSeasonEpisodesForm episodes={episodes} setEpisodes={setEpisodes} />
      <button className="add-season-btn" onClick={() => addSeason()}>
        Add Season
      </button>
    </div>
  );
}
