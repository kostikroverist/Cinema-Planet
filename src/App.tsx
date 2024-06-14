import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "./components/page/MainPage";
import Movies from "./components/page/Movies";
import TVShow from "./components/page/TVShow";
import Genre from "./components/page/Genre";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="tvshow" element={<TVShow />} />
        <Route path="genre" element={<Genre />} />
      </Route>
    </Routes>
  );
}

export default App;
