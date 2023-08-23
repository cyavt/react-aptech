import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PageHome from "./pages/PageHome";
import PageDetails from "./pages/PageDetails";
import PagePopular from "./pages/PagePopular";
import PagePlaying from "./pages/PagePlaying";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/:id" element={<PageDetails />} />
        <Route path="/popular" element={<PagePopular />} />
        <Route path="/nowplaying" element={<PagePlaying />} />
      </Routes>
    </Router>
  );
}

export default App;
