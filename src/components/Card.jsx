import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RecommendIcon from "@mui/icons-material/Recommend";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import { Container } from "@mui/system";

export default function Card({ videoData }) {
  const [isHovered, setIsHovered] = useState(false);

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
                <PlayCircleIcon />
                <AddCircleOutlineIcon />
                <RecommendIcon />
              </div>
              <div className="icons-right">
                <ExpandCircleDownOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
