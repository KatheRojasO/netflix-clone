import React from "react";
import { useDocumentaries } from "../state/Documentaries/DocumentariesContextProvider";
import { useMovies } from "../state/Movies/MoviesContextProvider";
import Header from "../components/Header";
import MovieBanner from "../components/browse/MovieBanner";
import Card from "../components/browse/Card";

export default function Movies() {
  const { movies } = useMovies();
  const { documentaries } = useDocumentaries();

  const moviesData = movies.map((item) => (
    <Card videoData={item} key={item.id} />
  ));

  const documentariesData = documentaries.map((item) => (
    <Card videoData={item} key={item.id} />
  ));

  return (
    <div className="movies-page">
      <Header />
      <MovieBanner />
      <div className="content-container">
        <div className="movies-container">
          <div>
            <h2>Movies</h2>
          </div>
          <div className="movies">{moviesData}</div>
        </div>
        <div className="movies-container">
          <div>
            <h2>Documentaries</h2>
          </div>
          <div className="movies">{documentariesData}</div>
        </div>
      </div>
    </div>
  );
}
