import React from "react";
import { useSeries } from "../state/Series/SeriesContextProvider";
import Header from "../components/Header";
import MovieBanner from "../components/MovieBanner";
import Card from "../components/Card";

export default function Series() {
  const { series } = useSeries();

  const seriesData = series.map((item) => (
    <Card videoData={item} key={item.id} />
  ));
  
  return (
    <div>
      <Header />
      <MovieBanner />
      <div className="content-container">
        <div className="movies-container">
          <div>
            <h2>Tv Shows</h2>
          </div>
          <div className="movies">{seriesData}</div>
        </div>
      </div>
    </div>
  );
}
