// Node modules
import { createContext, useContext, useReducer } from "react";

//Project Files
import DocumentariesReducer from "./DocumentariesReducer";

//Properties
const DocumentariesContext = createContext(null);

export function DocumentariesContextProvider({ children }) {
  //State
  const [documentaries, documentariesDispatch] = useReducer(DocumentariesReducer, []);

  //Properties
  const values = { documentaries, documentariesDispatch };

  return <DocumentariesContext.Provider value={values}>{children}</DocumentariesContext.Provider>;
}

export function useDocumentaries() {
  const context = useContext(DocumentariesContext);
  if (!context)
    throw new Error(
      "useDocumentaries only works if the parent component is wrapped in <DocumentariesContextProvider>"
    );

  return context;
}
