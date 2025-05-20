// src/components/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';
import '../css/MovieList.css'; // Create this CSS file for styling

const MovieList = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;