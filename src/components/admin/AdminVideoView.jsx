import React from 'react';
import { useMovies } from "../../state/Movies/MoviesContextProvider";
import { useSeries } from "../../state/Series/SeriesContextProvider";
import { useDocumentaries } from "../../state/Documentaries/DocumentariesContextProvider";
import { deleteMovie } from '../../scripts/moviesCollection';
import { deleteSeries } from '../../scripts/seriesCollection';
import { deleteDocumentary } from '../../scripts/documentariesCollection';

export default function AdminVideoView(props) {

    const { movies, moviesDispatch } = useMovies();
    const { series, seriesDispatch} = useSeries();
    const { documentaries, documentariesDispatch } = useDocumentaries();

    function deleteEntry(entry, dispatch, deleteDocumentFunction) {
        console.log(entry)
        dispatch({ type: "delete", payload: entry.id });
        deleteDocumentFunction(entry.id)
    }

    function listEntry(entryList, entryDispatch, entryDeleteFunction) {
        return entryList.map((entry) => (
            <div className="sections-container">
                <div className="sections">
                    <div className="file-name">
                        {entry.name}
                    </div>
                    <div className="links-icons">
                        <button>Edit</button>
                        <button onClick={() => deleteEntry(entry, entryDispatch, entryDeleteFunction)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        ))
    }


    return (
        <div>
            <h3>Movies:</h3>
            {listEntry(movies, moviesDispatch, deleteMovie)}
            <h3>Series:</h3>
            {listEntry(series, seriesDispatch, deleteSeries)}
            <h3>Documentaries:</h3>
            {listEntry(documentaries, documentariesDispatch, deleteDocumentary)}

        </div>
    );
}