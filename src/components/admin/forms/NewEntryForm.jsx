import { React } from 'react';
import MultiVideoEntryForm from './MultiVideoEntryForm';
import SingleVideoEntryForm from './SingleVideoEntryForm';

export default function NewEntryForm({categoryName, categoryDispatch, addFunction}) {

  const singleVideoEntry = {
    cast: '',
    description: '',
    duration: '',
    genres: '',
    image: '',
    link: '',
    name: '',
    year: ''
  }

  const multiVideoEntry = {
    cast: '',
    description: '',
    genres: '',
    image: '',
    name: '',
    seasons: [{
      season: '',
      episodes: [
        {
          description: '',
          duration: '',
          link: '',
          thumbnail: '',
          title: ''
        }
      ]
    }],
    year: ''
  }

  async function addEntry(entry) {

    delete entry["id"]
    console.log(entry)
    const newEntryId = await addFunction(entry)
    categoryDispatch({ type: "create", payload: { id: newEntryId, ...entry } });

  }

  return (
    <div>
      {categoryName === 'Series' ?
        <MultiVideoEntryForm currentEntry={multiVideoEntry} handleEntryEvent={addEntry} /> :
        <SingleVideoEntryForm currentEntry={singleVideoEntry} handleEntryEvent={addEntry} />}
    </div>
  );
}