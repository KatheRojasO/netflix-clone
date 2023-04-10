import { createContext, useContext, useReducer } from "react";

//Project Files
import SeriesReducer from "./SeriesReducer";

//Properties
const SeriesContext = createContext(null);

export function SeriesContextProvider({ children }) {
  //State
  const [series, seriesDispatch] = useReducer(SeriesReducer, []);

  //Properties
  const values = { series, seriesDispatch };

  return <SeriesContext.Provider value={values}>{children}</SeriesContext.Provider>;
}

export function useSeries() {
  const context = useContext(SeriesContext);
  if (!context)
    throw new Error(
      "useSeries only works if the parent component is wrapped in <SeriesContextProvider>"
    );

  return context;
}