export default function DocumentariesReducer(state, action) {
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
  const documentaries = action.payload;
  return documentaries;
}

function onCreate(state, action) {
  const newDocumentary = action.payload;
  return [...state, newDocumentary];
}

function onUpdate(state, action) {
  const updatedDocumentary = action.payload;
  const clonedDocumentaries = [...state];
  const itemIndex = clonedDocumentaries.findIndex(
    (item) => item.id === updatedDocumentary.id
  );
  clonedDocumentaries[itemIndex] = updatedDocumentary;
  return clonedDocumentaries;
}

function onDelete(state, action) {
  const id = action.payload;
  const clonedDocumentary = [...state];
  const itemIndex = clonedDocumentary.findIndex((item) => item.id === id);
  clonedDocumentary.splice(itemIndex, 1);
  return clonedDocumentary;
}
