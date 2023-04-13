import React, { useState } from 'react';

export default function SingleVideoEntryForm({ currentEntry, handleEntryEvent }) {
    const [cast, setCast] = useState(currentEntry.cast);
    const [description, setDescription] = useState(currentEntry.description);
    const [duration, setDuration] = useState(currentEntry.duration);
    const [genres, setGenres] = useState(currentEntry.genres);
    const [image, setImage] = useState(currentEntry.image)
    const [link, setLink] = useState(currentEntry.link);
    const [name, setName] = useState(currentEntry.name);
    const [year, setYear] = useState(currentEntry.year);

    function handleFormSubmit(){

        const newEntry = {
            id: currentEntry.id,
            cast: cast,
            description: description,
            duration: duration,
            genres: genres,
            image: image,
            link: link,
            name: name,
            year: year
        }

        handleEntryEvent(newEntry)
    }

    return (
        <div>
            <form className="add-form" >
                <div className="form-title">
                    <h3>Add a new entry to Netflix:</h3>
                </div>
                <div className="form-inputs">
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
                    <label className="add-form-label">
                        Entry Duration:
                        <input
                            type="text"
                            value={duration}
                            onChange={(event) => setDuration(event.target.value)}
                        />
                    </label>
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
                    <label className="add-form-label">
                        Entry Link:
                        <input
                            type="text"
                            value={link}
                            onChange={(event) => setLink(event.target.value)}
                        />
                    </label>
                    <label className="add-form-label">
                        Entry Image link:
                        <input
                            type="text"
                            value={image}
                            onChange={(event) => setImage(event.target.value)}
                        />
                    </label>
                </div>
            </form >

            <div className="form-button">
                <button className="add-button" onClick={handleFormSubmit}>Save Entry</button>
            </div>
        </div>
    );
}