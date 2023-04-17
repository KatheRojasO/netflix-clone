import React from "react";
import bannerLogo from "../../assets/images/banner-logo.png";

export default function MovieBanner() {
  return (
    <div>
      <header className="banner">
        <div className="banner-content">
          <img src={bannerLogo} alt="logo" className="banner-logo" />
          <p className="banner-description">
            Stranger sightings. Government secrets. Fearless kids. And a dark
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
