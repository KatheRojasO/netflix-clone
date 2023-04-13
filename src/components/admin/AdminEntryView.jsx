import React from 'react';
import { useMovies } from "../../state/Movies/MoviesContextProvider";
import { useSeries } from "../../state/Series/SeriesContextProvider";
import { useDocumentaries } from "../../state/Documentaries/DocumentariesContextProvider";
import { deleteMovie, updateMovie } from '../../scripts/moviesCollection';
import { deleteSeries, updateSeries } from '../../scripts/seriesCollection';
import { deleteDocumentary, updateDocumentary } from '../../scripts/documentariesCollection';
import AdminCategoryView from './AdminCategoryView';

export default function AdminEntryView() {

  const { movies, moviesDispatch } = useMovies();
  const { series, seriesDispatch } = useSeries();
  const { documentaries, documentariesDispatch } = useDocumentaries();

  return (
    <div>
      <AdminCategoryView
        categoryName="Movies"
        categoryEntries={movies}
        categoryDispatch={moviesDispatch}
        updateFunction={updateMovie}
        deleteFunction={deleteMovie}
      />
      <AdminCategoryView
        categoryName="Series"
        categoryEntries={series}
        categoryDispatch={seriesDispatch}
        updateFunction={updateSeries}
        deleteFunction={deleteSeries}
      />
      <AdminCategoryView
        categoryName="Documentaries"
        categoryEntries={documentaries}
        categoryDispatch={documentariesDispatch}
        updateFunction={updateDocumentary}
        deleteFunction={deleteDocumentary}
      />
    </div>
  );
}