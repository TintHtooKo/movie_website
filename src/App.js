import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import MovieList from "./components/movieList/movieList";
import MovieDetail from "./components/movieDetail/MovieDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="movie/:id" element={<MovieDetail/>} />
          <Route path="movies/:type" element={<MovieList/>} />
          <Route path="/*" element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
