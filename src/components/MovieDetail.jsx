// src/components/MovieDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { InitialMovies } from '../data';
import '../css/MovieDetail.css'; // Optional CSS for styling

const MovieDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = InitialMovies.find((m) => m.id === id);

    if (!movie) return <h2>Film non trouvé</h2>;

    return (
        <div className="movie-detail">
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <div className="movie-rating">{'⭐'.repeat(movie.rating)}</div>
            <iframe
                width="560"
                height="315"
                src={movie.trailerLink.replace("watch?v=", "embed/")}
                title="YouTube trailer"
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <br />
            <button onClick={() => navigate('/')}>Retour à la page d'accueil</button>
        </div>
    );
};

export default MovieDetail;
// src/components/MovieDetail.css