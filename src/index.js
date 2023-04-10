import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./state/User/UserContextProvider";
import MoviesContextProvider from "./state/Movies/MoviesContextProvider";
import SeriesContextProvider from "./state/Series/SeriesContextProvider";
import DocumentariesContextProvider from "./state/Documentaries/DocumentariesContextProvider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <MoviesContextProvider>
          <SeriesContextProvider>
            <DocumentariesContextProvider>
              <App />
            </DocumentariesContextProvider>
          </SeriesContextProvider>
        </MoviesContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
