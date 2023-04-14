import React from "react";
import CardSlider from "./CardSlider";

export default function Slider({ name, videos }) {
  const getContentFromRange = (from, to) => {
    return videos.slice(from, to);
  };

  return (
    <div className="slider">
      <h3>{name}</h3>
      <CardSlider data={getContentFromRange(0, 10)} />
    </div>
  );
}
