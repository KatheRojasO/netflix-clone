import React from "react";
import data from "../JSONFiles/topTenNumbers.json";

export default function TopTenSection() {
  const topList = data.map((item, index) => (
    <div key={index} className="carousel__item">
      <img className="number-img" src={item.image} alt={item.title} />
      <img className="movie-img" src={item.movieImage} alt={item.title} />
    </div>
  ));

  return (
    <div className="top-ten-section">
      <div className="carousel">
        <p>Top 10 TV Shows & Movies in Sweden Today</p>
        <div className="carousel__inner">{topList}</div>
      </div>
    </div>
  );
}
