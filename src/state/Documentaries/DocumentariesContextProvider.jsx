// Node modules
import { createContext, useContext, useReducer } from "react";

//Project Files
import DocumentariesReducer from "./DocumentariesReducer";

//Properties
const DocumentariesContext = createContext(null);

export function DocumentariesContextProvider({ children }) {
  //State
  const [documentaries, dispatch] = useReducer(DocumentariesReducer, []);

  //Properties
  const values = { documentaries, dispatch };

  return <DocumentariesContextProvider.Provider value={values}>{children}</DocumentariesContextProvider.Provider>;
}

export function useDocumentaries() {
  const context = useContext(DocumentariesContext);
  if (!context)
    throw new Error(
      "useDocumentaries only works if the parent component is wrapped in <DocumentariesContextProvider>"
    );

  return context;
}
