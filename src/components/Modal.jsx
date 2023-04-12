import React from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player/youtube";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

export default function Modal({ videoData, open, onClose }) {
  const { link, description, genres, duration, year, cast } = videoData;

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="overlay-style" />
      <div className="modal-style">
        <CancelRoundedIcon className="close-button" onClick={onClose}/>
        <div>
          <ReactPlayer
            url={videoData.link}
            width="100%"
            height="300px"
            playing={true}
          />
        </div>
        <div className="modal-info">
          <div className="modal-info-left">
            <div className="header">
              <span>{year}</span>
              <span>{duration}</span>
            </div>
            <div className="modal-description">
              <p>{description}</p>
            </div>
          </div>
          <div className="modal-info-right">
             <p><span>Cast: </span>{cast}</p>
            <p><span> Genres: </span>{genres} </p>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
