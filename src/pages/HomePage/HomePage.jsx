import { useEffect, useState } from 'react';
import { fetchTrends } from '../../tmdb/tmdbAPI';
import MovieList from '../../components/MovieList/MovieList';
import styles from './HomePage.module.css';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrends().then(response => setMovies(response.data.results));
  }, []);

  return (
    <div className={styles.pageContainer}>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;