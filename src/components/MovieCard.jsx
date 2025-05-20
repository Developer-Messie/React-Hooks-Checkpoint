// src/components/MovieCard.js
import React from 'react';
import '../css/MovieCard.css'; // Create this CSS file for styling

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <div className="movie-rating">
                    {'⭐'.repeat(movie.rating)}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;