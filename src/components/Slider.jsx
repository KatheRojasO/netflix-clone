import React from "react";
import CardSlider from "./CardSlider";

export default function Slider({ name, videos }) {
  const getContentFromRange = (from, to) => {
    return videos.slice(from, to);
  };

  return (
    <div className="slider">
      <h1>{name}</h1>
      <CardSlider data={getContentFromRange(0, 10)} />
    </div>
  );
}
