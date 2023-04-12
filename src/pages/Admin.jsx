import React from "react";
import { useMovies } from "../state/Movies/MoviesContextProvider";
import { useSeries } from "../state/Series/SeriesContextProvider";
import { useDocumentaries } from "../state/Documentaries/DocumentariesContextProvider";
import NewEntryForm from "../components/admin/NewEntryForm";
import AdminVideoView from "../components/admin/AdminVideoView";

export default function Admin() {
    const { movies } = useMovies();
    const { series } = useSeries();
    const { documentaries } = useDocumentaries();

    return (
        <div>
            <NewEntryForm/>
            <AdminVideoView />
        </div>
    )
}