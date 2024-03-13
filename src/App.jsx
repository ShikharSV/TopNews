import { useState } from "react";
import "./App.css";
import NewsItem from "./components/NewsItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import News from "./components/News";

function App() {
  const [progress, setProgress] = useState(0);
  const setTheProgress = (progress) => {
    setProgress((progress = progress));
  };
  return (
    <BrowserRouter>
      <Navbar />
      <LoadingBar progress={progress} height={3} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              setProgress={setProgress}
              key="general"
              pageSize={9}
              country="in"
              category="general"
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              key="entertainment"
              pageSize={9}
              country="in"
              category="entertainment"
            />
          }
        />
        <Route
          path="/health"
          element={
            <News
              setProgress={setProgress}
              key="health"
              pageSize={9}
              country="in"
              category="health"
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              key="sports"
              pageSize={9}
              country="in"
              category="sports"
            />
          }
        />
        <Route
          path="/business"
          element={
            <News
              setProgress={setProgress}
              key="business"
              pageSize={9}
              country="in"
              category="business"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
