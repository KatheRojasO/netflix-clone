export default function SeriesReducer(state, action) {
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
  const series = action.payload;
  return series;
}

function onCreate(state, action) {
  const newSeries = action.payload;
  return [...state, newSeries];
}

function onUpdate(state, action) {
  const updatedSeries = action.payload;
  const clonedSeries = [...state];
  const itemIndex = clonedSeries.findIndex(
    (item) => item.id === updatedSeries.id
  );
  clonedSeries[itemIndex] = updatedSeries;
  return clonedSeries;
}

function onDelete(state, action) {
  const id = action.payload;
  const clonedSeries = [...state];
  const itemIndex = clonedSeries.findIndex((item) => item.id === id);
  clonedSeries.splice(itemIndex, 1);
  return clonedSeries;
}

