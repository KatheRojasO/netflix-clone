import React from "react";
import Header from "../components/Header";
import MovieBanner from "../components/MovieBanner";
import data from "../JSONFiles/topTenNumbers.json";

export default function Browse() {
  const firstSection = data.slice(0, 5);
  const secondSection = data.slice(5, 10);

  const section1 = firstSection.map((section) => (
    <div key={section.id} className="item">
      <img src={section.image} alt="number-img" className="number-img" />
      <img src={section.movieImage} alt="movie-img" className="movie-img" />
    </div>
  ));

  const section2 = secondSection.map((section) => (
    <div key={section.id} className="item">
      <img src={section.image} alt="number-img" className="number-img" />
      <img src={section.movieImage} alt="movie-img" className="movie-img" />
    </div>
  ));

  return (
    <div className="browse-page">
      <Header />
      <MovieBanner />
      <div className="container">
        <p>Top 10 TV Shows & Movies in Sweden Today</p>
        <div className="wrapper">
          <section id="firstSection">
            <a href="#secondSection">‹</a>
            {section1}
            <a href="#secondSection">›</a>
          </section>
          <section id="secondSection">
            <a href="#firstSection">‹</a>
            {section2}
            <a href="#firstSection">›</a>
          </section>
        </div>
      </div>
    </div>
  );
}
