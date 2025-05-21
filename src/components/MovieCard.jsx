// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/MovieCard.css';

const MovieCard = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.id}`} className="movie-link">
            <div className="movie-card">
                <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.description.substring(0, 100)}...</p>
                    <div className="movie-rating">
                        {'⭐'.repeat(movie.rating)}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
