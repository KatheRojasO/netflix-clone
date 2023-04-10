// Node modules
import { createContext, useContext, useReducer } from "react";

//Project Files
import MoviesReducer from "./MoviesReducer";

//Properties
const MoviesContext = createContext(null);

export function MoviesContextProvider({ children }) {
  //State
  const [movies, dispatch] = useReducer(MoviesReducer, []);

  //Properties
  const values = { movies, dispatch };

  return <MoviesContextProvider.Provider value={values}>{children}</MoviesContextProvider.Provider>;
}

export function useMovies() {
  const context = useContext(MoviesContext);
  if (!context)
    throw new Error(
      "useMovies only works if the parent component is wrapped in <MoviesContextProvider>"
    );

  return context;
}