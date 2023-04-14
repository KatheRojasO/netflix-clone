import React from "react";
import { useParams } from "react-router-dom";
import { useDocumentaries } from "../state/Documentaries/DocumentariesContextProvider";
import { useMovies } from "../state/Movies/MoviesContextProvider";
import { useSeries } from "../state/Series/SeriesContextProvider";
import ReactPlayer from "react-player/youtube";

export default function Player() {
  const { movies } = useMovies();
  const { series } = useSeries();
  const { documentaries } = useDocumentaries();
  const params = useParams();

  const movieVideo = movies.find((video) => video.id === params.id);
  const documentaryVideo = documentaries.find(
    (video) => video.id === params.id
  );

  const seriesElement = series.find((serie) => serie.id === params.id);
  const serieVideo = seriesElement && seriesElement.seasons.at(params.season).episodes.at(params.episode);

  return (
    <div className="playerDiv">
      {movieVideo !== undefined && (
        <ReactPlayer url={movieVideo.link} playing={true}
        width="100%"
        height="100vh" />
      )}
      {serieVideo !== undefined && (
        <ReactPlayer url={serieVideo.link} playing={true}
        width="100%"
        height="100vh" />
      )}
      {documentaryVideo !== undefined && (
        <ReactPlayer url={documentaryVideo.link} playing={true}
        width="100%"
        height="100vh"/>
      )}
    </div>
  );
}
