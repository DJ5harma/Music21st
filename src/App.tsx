// import { Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import LeftNav from "./components/LeftNav";
import TopNav from "./components/TopNav";
import PopularVideos from "./components/PopularVideos";
import Videos from "./components/Videos";
import Playlists from "./components/Playlists";
import Home from "./components/Home";

function App() {
  return (
    <>
      <TopNav />
      <LeftNav />
      <div id="main-content">
        <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/popular-videos" element={<PopularVideos />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/playlists" element={<Playlists />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
