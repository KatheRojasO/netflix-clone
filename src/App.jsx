import { useState, useEffect } from "react";
import Router from "./components/Router";
import "./style/style.css";
import { readMovies } from "./scripts/moviesCollection";
import { readSeries } from "./scripts/seriesCollection";
import { readDocumentaries } from "./scripts/documentariesCollection";
import { useMovies } from "./state/Movies/MoviesContextProvider";
import { useSeries } from "./state/Series/SeriesContextProvider";
import { useDocumentaries } from "./state/Documentaries/DocumentariesContextProvider";

// Should be export default
function App() {
  const { documentariesDispatch } = useDocumentaries();
  const { moviesDispatch } = useMovies();
  const { seriesDispatch } = useSeries();
  const [status, setStatus] = useState(0);

  // the loading can be done on both the Admin Home and the Customer Home page.
  // right now you are making the login screen wait for the movies for no purpose at this point in time
  useEffect(() => {
    // You have 3 loadings, making the process slower, the content can fit into a single schema called "media"
    // where only the media.category = "series" has the sub-folder for content/episodes in the database
    async function loadMovies() {
      const moviesData = await readMovies().catch(onFail);
      moviesDispatch({ type: "initialise", payload: moviesData });
    }

    async function loadSeries() {
      const seriesData = await readSeries().catch(onFail);
      seriesDispatch({ type: "initialise", payload: seriesData });
    }

    async function loadDocumentaries() {
      const documentariesData = await readDocumentaries().catch(onFail);
      documentariesDispatch({ type: "initialise", payload: documentariesData });
    }

    loadMovies();
    loadSeries();
    loadDocumentaries();
    onSuccess();
  }, []);

  function onSuccess() {
    setStatus(1);
  }

  function onFail() {
    setStatus(2);
  }

  // good
  return (
    <div className="App">
      <div className="App">
        {status === 0 && <p>Loading...⏱️</p>}
        {status === 1 && <Router />}
        {status === 2 && <p>Error...❌</p>}
      </div>
    </div>
  );
}

export default App;
