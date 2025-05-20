// src/App.js
import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import { InitialMovies } from './data'; // Our initial movie data
import './App.css'; // Basic app styling

function App() {
  const [movies, setMovies] = useState(InitialMovies);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRate, setFilterRate] = useState(0); // 0 means no rating filter

  // State for new movie input
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 1,
  });



  const handleFilterChange = (filter) => {
    if (filter.title !== null) {
      setFilterTitle(filter.title);
      setFilterRate(0); // Reset rating filter when title changes
    }
    if (filter.rate !== null) {
      setFilterRate(filter.rate);
      setFilterTitle(''); // Reset title filter when rating changes
    }
  };

  const handleNewMovieChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: name === 'rating' ? Number(value) : value,
    }));
  };


  // Function to add a new movie
  const addMovie = () => {
    if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating) {
      setMovies((prevMovies) => [
        ...prevMovies,
        {
          id: String(prevMovies.length + 1), // Simple ID generation
          ...newMovie,
        },
      ]);
      // Clear the form
      setNewMovie({
        title: '',
        description: '',
        posterURL: '',
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
    <div className="App">
      <h1>Mes Movies & TV Shows Préférés</h1>

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
    </div>
  );
}

export default App;



















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
