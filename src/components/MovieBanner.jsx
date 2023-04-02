import React from "react";

export default function MovieBanner() {
  return (
    <div>
      <header className="banner">
        <div className="banner-content">
          <h1 className="banner-title">Stranger Things</h1>
          <p className="banner-description">
            Stranger sightings. Government secrets. Feraless kids. And a dark
            force that turns a small town upside down.
          </p>
          <div className="banner-buttons">
            <button className="banner-button">Play</button>
            <button className="banner-button">More Info</button>
          </div>
        </div>
        <div className="banner-fade"></div>
      </header>
    </div>
  );
}
