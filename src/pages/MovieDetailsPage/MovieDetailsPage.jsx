import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { fetchById } from '../../tmdb/tmdbAPI';
import styles from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const backLink = location.state?.from || '/movies';

  useEffect(() => {
    fetchById(movieId).then(response => setMovie(response.data));
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';
  const genres = movie.genres?.map(g => g.name).join(', ');

  return (
    <div className={styles.pageContainer}>
      <button onClick={() => navigate(backLink)}>Go back</button>
      <div className={styles.detailsWrapper}>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className={styles.poster}
          />
        )}
        <div className={styles.info}>
          <h2>{movie.title} ({releaseYear})</h2>
          <p><strong>Rating:</strong> {movie.vote_average.toFixed(1)} / 10</p>
          <p><strong>Genres:</strong> {genres}</p>
          <p>{movie.overview}</p>
        </div>
      </div>
      <div className={styles.linksContainer}>
        <ul className={styles.linksList}>
          <li>
            <Link to="cast" state={{ from: backLink }}>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLink }}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;