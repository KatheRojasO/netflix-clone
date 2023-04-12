import React from "react";
import Card from "./Card";

export default function CardSlider({ data }) {
  console.log(data);
  const videoItems = data.map((item) => (
    <Card videoData={item} key={item.id} />
  ));

  return <div className="card-slider">{videoItems}</div>;
}
