import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RecommendIcon from "@mui/icons-material/Recommend";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import Modal from "./Modal";

// the card is more complex than it needs to be.
// i would rather have a card with no video preview, than a homescreen with less design
export default function Card({ videoData }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="content-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={videoData.image} alt="video-img" className="container-image" />
      {isHovered && (
        <div className="hover">
          <div className="video-container">
            <ReactPlayer
              url={videoData.link}
              width="100%"
              height="100%"
              playing={true}
            />
          </div>
          <div className="info-container">
            <div className="icons-container">
              <div className="icons-left">
                <PlayCircleIcon
                  onClick={() => navigate(`/watch/${videoData.id}`)}
                />
                <AddCircleOutlineIcon />
                <RecommendIcon />
              </div>
              <div className="icons-right">
                <ExpandCircleDownOutlinedIcon onClick={() => setIsOpen(true)} />
                <Modal
                  videoData={videoData}
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
