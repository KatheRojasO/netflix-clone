export default function MoviesReducer(state, action) {
  switch (action.type) {
    case "initialise":
      return onInitialise(action);
    // case "create":
    //   return onCreate(state, action);
    // case "update":
    //   return onUpdate(state, action);
    // case "delete":
    //   return onDelete(state, action);
    default:
      throw new Error("Unhandled action:", action.type);
  }
}

function onInitialise(action) {
  const movies = action.payload;
  return movies;
}
