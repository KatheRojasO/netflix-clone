import React from "react";
import Slider from "../components/browse/Slider";
import Header from "../components/Header";
import MovieBanner from "../components/browse/MovieBanner";
import TopTenSection from "../components/browse/TopTenSection";
import { useDocumentaries } from "../state/Documentaries/DocumentariesContextProvider";
import { useMovies } from "../state/Movies/MoviesContextProvider";
import { useSeries } from "../state/Series/SeriesContextProvider";

export default function Browse() {
  const { movies } = useMovies();
  const { series } = useSeries();
  const { documentaries } = useDocumentaries();

  return (
    <div className="browse-page">
      <Header />
      <MovieBanner />
      <TopTenSection />
      <Slider name="Movies" videos={movies} />
      <Slider name="Series" videos={series} />
      <Slider name="Documentaries" videos={documentaries} />
    </div>
  );
}
