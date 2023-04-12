import { React, useState } from 'react';
import { useMovies } from "../../state/Movies/MoviesContextProvider";
import { useSeries } from "../../state/Series/SeriesContextProvider";
import { useDocumentaries } from "../../state/Documentaries/DocumentariesContextProvider";
import { createMovie } from '../../scripts/moviesCollection';
import { createSeries } from '../../scripts/seriesCollection';
import { createDocumentary } from '../../scripts/documentariesCollection';
import SeriesSeasonForm from './SeriesSeasonForm';

export default function NewEntryForm() {
    const [isSeries, setIsSeries] = useState(false);

    const [cast, setCast] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [genres, setGenres] = useState("");
    const [image, setImage] = useState("")
    const [link, setLink] = useState("");
    const [name, setName] = useState("");
    const [seasons, setSeasons] = useState([{
        season: '',
        episodes: [{}]
    }])
    const [year, setYear] = useState("");;

    const { moviesDispatch } = useMovies();
    const { seriesDispatch } = useSeries();
    const { documentariesDispatch } = useDocumentaries();

    const entryOptions = ["Movie", "Series", "Documentary"]
    const options = entryOptions.map((option, index) => <option key={index}>{option}</option>);

    async function addEntry(entryObject, dispatch, createDocumentFunction) {

        const newEntryId = await createDocumentFunction(entryObject)
        dispatch({ type: "create", payload: { id: newEntryId, ...entryObject } });

    }

    async function handleAddEntryEvent(event) {
        event.preventDefault();

        switch (category) {
            case 'Movie':
                let movieObject = {
                    cast: cast,
                    description: description,
                    duration: duration,
                    genres: genres,
                    image: image,
                    link: link,
                    name: name,
                    year: year
                }

                await addEntry(movieObject, moviesDispatch, createMovie)
                break;
            case 'Series':
                let seriesObject = {
                    cast: cast,
                    description: description,
                    genres: genres,
                    image: image,
                    name: name,
                    seasons: seasons,
                    year: year
                }

                console.log("here")

                await addEntry(seriesObject, seriesDispatch, createSeries)
                break;
            case 'Documentary':
                let documentaryObject = {
                    cast: cast,
                    description: description,
                    duration: duration,
                    genres: genres,
                    image: image,
                    link: link,
                    name: name,
                    year: year
                }
                await addEntry(documentaryObject, documentariesDispatch, createDocumentary)
                break;
        }
    }

    function handleCategorySelected(category) {
        setCategory(category)

        if (category === 'Series') {
            setIsSeries(true)
        }
    }

    function addSeason() {
        const newSeason = {
            season: '',
            episodes: [{}]
        }

        setSeasons([...seasons, newSeason])
    }

    return (
        <div>
            <form className="add-form" >
                <div className="form-title">
                    <h3>Add a new entry to Netflix:</h3>
                </div>
                <div className="form-inputs">
                    <label className="add-form-label">
                        Select Entry Category:
                        <select name="categories" id="category-select" onChange={(event) => handleCategorySelected(event.target.value)}>
                            <option value="">--Please choose a category-</option>
                            {options}
                        </select>
                    </label>
                    <label className="add-form-label">
                        Entry name:
                        <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </label>
                    <label className="add-form-label">
                        Entry description:
                        <input
                            type="text"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </label>
                    <label className="add-form-label">
                        Entry Year:
                        <input
                            type="text"
                            value={year}
                            onChange={(event) => setYear(event.target.value)}
                        />
                    </label>
                    {!isSeries && <label className="add-form-label">
                        Entry Duration:
                        <input
                            type="text"
                            value={duration}
                            onChange={(event) => setDuration(event.target.value)}
                        />
                    </label>}
                    <label className="add-form-label">
                        Entry Cast:
                        <input
                            type="text"
                            value={cast}
                            onChange={(event) => setCast(event.target.value)}
                        />
                    </label>
                    <label className="add-form-label">
                        Entry Genres:
                        <input
                            type="text"
                            value={genres}
                            onChange={(event) => setGenres(event.target.value)}
                        />
                    </label>
                    {!isSeries && <label className="add-form-label">
                        Entry Link:
                        <input
                            type="text"
                            value={link}
                            onChange={(event) => setLink(event.target.value)}
                        />
                    </label>}
                    <label className="add-form-label">
                        Entry Image link:
                        <input
                            type="text"
                            value={image}
                            onChange={(event) => setImage(event.target.value)}
                        />
                    </label>
                    {isSeries &&
                        <div>
                            <h4>Seasons</h4>
                            {seasons.map((season, index) => {
                                return (
                                    <div key={index}>
                                        <SeriesSeasonForm index={index} season={season} seasons={seasons} setSeasons={setSeasons} />
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
            </form >

            {isSeries && <button onClick={() => addSeason()}>Add Season</button>}

            <div className="form-button">
                <button className="add-button" onClick={(event) => handleAddEntryEvent(event)}>Add Entry</button>
            </div>
        </div>
    );
}