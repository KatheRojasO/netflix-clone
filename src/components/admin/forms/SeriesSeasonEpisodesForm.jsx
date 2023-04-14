import {React} from 'react';

export default function SeriesSeasonEpisodesForm({episodes, setEpisodes}) {

    function handleEpisodeFormChange(event, index) {
        let episodesData = [...episodes]
        episodesData[index][event.target.name] = event.target.value

        setEpisodes(episodesData)
    }

    function addEpisode(event) {
        event.preventDefault();

        const newEpisode = {
            description: '',
            duration: '',
            link: '',
            thumbnail: '',
            title: ''
        }

        setEpisodes([...episodes, newEpisode])
    }

    const episodesFormValues = episodes.map((episode, index) => {
        return (
            <div className='serie-inputs' key={index}>
                <label className="add-form-label">
                    Episode Title:
                    <input
                        name="title"
                        type="text"
                        value={episode.title}
                        onChange={(event) => handleEpisodeFormChange(event, index)}
                    />
                </label>
                <label className="add-form-label">
                    Episode Description:
                    <input
                        name="description"
                        type="text"
                        value={episode.description}
                        onChange={(event) => handleEpisodeFormChange(event, index)}
                    />
                </label>
                <label className="add-form-label">
                    Episode Duration:
                    <input
                        name="duration"
                        type="text"
                        value={episode.duration}
                        onChange={(event) => handleEpisodeFormChange(event, index)}
                    />
                </label>
                <label className="add-form-label">
                    Episode Thumbnail:
                    <input
                        name="thumbnail"
                        type="text"
                        value={episode.thumbnail}
                        onChange={(event) => handleEpisodeFormChange(event, index)}
                    />
                </label>
                <label className="add-form-label">
                    Episode Link:
                    <input
                        name="link"
                        type="text"
                        value={episode.link}
                        onChange={(event) => handleEpisodeFormChange(event, index)}
                    />
                </label>
            </div>
        )
    })

    return (
        <div>
            <h4>Episodes</h4>
            {episodesFormValues}
            <button onClick={(event) => addEpisode(event)}>Add Episode</button>
        </div>
    );
}