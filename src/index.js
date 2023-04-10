import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {UserContextProvider} from "./state/User/UserContextProvider";
import {MoviesContextProvider} from "./state/Movies/MoviesContextProvider";
import {SeriesContextProvider} from "./state/Series/SeriesContextProvider";
import {DocumentariesContextProvider} from "./state/Documentaries/DocumentariesContextProvider";


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
