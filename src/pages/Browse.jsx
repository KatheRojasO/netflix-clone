import React from "react";
import Header from "../components/Header";
import MovieBanner from "../components/MovieBanner";
import TopTenSection from "../components/TopTenSection";

export default function Browse() {
  
  return (
    <div className="browse-page">
      <Header />
      <MovieBanner />
      <TopTenSection/>
    </div>
  );
}
