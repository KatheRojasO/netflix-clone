import React from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player/youtube";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

export default function Modal({ videoData, open, onClose }) {
  const { link, description, genres, duration, year, cast, seasons } =
    videoData;

  if (!open) return null;

  const episodes = seasons ? seasons.map((item) => {
    return (
      <div key={item.id}>
        <h1>{item.season}</h1>
        {item.episodes.map((episode) => {
          return (
            <div>
              {episode.title}
              {episode.description}
            </div>
          )
        })}
      </div>
    );
  }) : null;

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
              { duration === undefined && <span>{duration}</span>}
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
        { episodes && 
          <div>episodes {episodes}</div>
          
        }
      </div>
    </div>,
    document.getElementById("portal")
  );
}
