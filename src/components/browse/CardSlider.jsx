import React from "react";
import Card from "./Card";

// good but it can be done with pure CSS (but no points taken)
export default function CardSlider({ data }) {
  const videoItems = data.map((item) => (
    <Card videoData={item} key={item.id} />
  ));

  return <div className="card-slider">{videoItems}</div>;
}
