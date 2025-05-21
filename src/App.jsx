// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieDetail from './components/MovieDetail';
import { InitialMovies } from './data';
import './App.css';

function App() {
  const [movies, setMovies] = useState(InitialMovies);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRate, setFilterRate] = useState(0);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    trailerLink: '',
    rating: 1,
  });

  const handleFilterChange = (filter) => {
    if (filter.title !== null) {
      setFilterTitle(filter.title);
      setFilterRate(0);
    }
    if (filter.rate !== null) {
      setFilterRate(filter.rate);
      setFilterTitle('');
    }
  };

  const handleNewMovieChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: name === 'rating' ? Number(value) : value,
    }));
  };

  const addMovie = () => {
    if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating && newMovie.trailerLink) {
      setMovies((prevMovies) => [
        ...prevMovies,
        {
          id: String(prevMovies.length + 1),
          ...newMovie,
        },
      ]);
      setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        trailerLink: '',
        rating: 1,
      });
    } else {
      alert('Svp remplissez tous les champs pour ajouter un movie!');
    }
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = filterTitle
      ? movie.title.toLowerCase().includes(filterTitle.toLowerCase())
      : true;
    const matchesRating = filterRate ? movie.rating >= filterRate : true;
    return matchesTitle && matchesRating;
  });

  return (
    <Router>
      <div className="App">
        <h1>Mes Movies & TV Shows Préférés</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter onFilterChange={handleFilterChange} />
                <div className="add-movie-form">
                  <h2>Ajouter un nouveau Movie</h2>
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newMovie.title}
                    onChange={handleNewMovieChange}
                  />
                  <textarea
                    name="description"
                    placeholder="Description"
                    value={newMovie.description}
                    onChange={handleNewMovieChange}
                  ></textarea>
                  <input
                    type="text"
                    name="posterURL"
                    placeholder="Poster URL"
                    value={newMovie.posterURL}
                    onChange={handleNewMovieChange}
                  />
                  <input
                    type="text"
                    name="trailerLink"
                    placeholder="Trailer Link (YouTube Embed)"
                    value={newMovie.trailerLink}
                    onChange={handleNewMovieChange}
                  />
                  <input
                    type="number"
                    name="rating"
                    placeholder="Rating (1-5)"
                    min="1"
                    max="5"
                    value={newMovie.rating}
                    onChange={handleNewMovieChange}
                  />
                  <button onClick={addMovie}>Ajouter un Movie</button>
                </div>
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
