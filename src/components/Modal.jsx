import React from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player/youtube";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { Link } from "react-router-dom";

export default function Modal({ videoData, open, onClose }) {
  const { link, description, genres, duration, year, cast, seasons } =
    videoData;

  if (!open) return null;

  const episodes = seasons
    ? seasons.map((item) => {
        return (
          <div key={item.id}>
            <div className="season-card-header">
              <h3>Episodes</h3>
              <h3>{item.season}</h3>
            </div>
            {item.episodes.map((episode) => {
              return (
                <div className="episodes-container">
                  <div className="episode-card-header">
                    <h4>{episode.title}</h4>
                    <p>{episode.duration}</p>
                  </div>
                  <div className="episode-description">
                    <Link to={episode.link}>
                      <p>{episode.description}</p>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })
    : null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="overlay-style" />
      <div className="modal-style">
        <CancelRoundedIcon className="close-button" onClick={onClose} />
        <div>
          <ReactPlayer url={link} width="100%" height="300px" />
        </div>
        <div className="modal-info">
          <div className="modal-info-left">
            <div className="header">
              <span>{year}</span>
              {duration === undefined && <span>{duration}</span>}
            </div>
            <div className="modal-description">
              <p>{description}</p>
            </div>
          </div>
          <div className="modal-info-right">
            <p>
              <span>Cast: </span>
              {cast}
            </p>
            <p>
              <span> Genres: </span>
              {genres}{" "}
            </p>
          </div>
        </div>
        {episodes && <div className="modal-info-down">{episodes}</div>}
      </div>
    </div>,
    document.getElementById("portal")
  );
}
