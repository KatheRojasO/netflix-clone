export default function MoviesReducer(state, action) {
  switch (action.type) {
    case "initialise":
      return onInitialise(action);
    case "create":
      return onCreate(state, action);
    case "update":
      return onUpdate(state, action);
    case "delete":
      return onDelete(state, action);
    default:
      throw new Error("Unhandled action:", action.type);
  }
}

function onInitialise(action) {
  const movies = action.payload;
  return movies;
}

function onCreate(state, action) {
  const newMovie = action.payload;
  return [...state, newMovie];
}

function onUpdate(state, action) {
  const updatedMovie = action.payload;
  const clonedMovies = [...state];
  const itemIndex = clonedMovies.findIndex(
    (item) => item.id === updatedMovie.id
  );
  clonedMovies[itemIndex] = updatedMovie;
  return clonedMovies;
}

function onDelete(state, action) {
  const id = action.payload;
  const clonedMovie = [...state];
  const itemIndex = clonedMovie.findIndex((item) => item.id === id);
  clonedMovie.splice(itemIndex, 1);
  return clonedMovie;
}
