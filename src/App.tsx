import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>} />
      </Routes>

    </>
  );
}

export default App;
