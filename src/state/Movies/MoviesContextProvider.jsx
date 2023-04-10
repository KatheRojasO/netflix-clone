// Node modules
import { createContext, useContext, useReducer } from "react";

//Project Files
import MoviesReducer from "./MoviesReducer";

//Properties
const MoviesContext = createContext(null);

export function MoviesContextProvider({ children }) {
  //State
  const [movies, moviesDispatch] = useReducer(MoviesReducer, []);

  //Properties
  const values = { movies, moviesDispatch };

  return <MoviesContext.Provider value={values}>{children}</MoviesContext.Provider>;
}

export function useMovies() {
  const context = useContext(MoviesContext);
  if (!context)
    throw new Error(
      "useMovies only works if the parent component is wrapped in <MoviesContextProvider>"
    );

  return context;
}