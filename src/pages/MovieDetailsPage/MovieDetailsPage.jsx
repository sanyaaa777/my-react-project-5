import { useEffect, useState } from 'react';
import { useParams, Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../../services/tmdbApi';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import styles from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const backLink = location.state?.from || '/movies';

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={styles.pageContainer}>
      <button onClick={() => navigate(backLink)}>Go back</button>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <div className={styles.linksContainer}>
        <ul className={styles.linksList}>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Routes>
    </div>
  );
}

export default MovieDetailsPage;