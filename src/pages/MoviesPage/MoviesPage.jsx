import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByQuery } from '../../tmdb/tmdbAPI';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') || '';

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();
    if (value) setSearchParams({ query: value });
  };

  useEffect(() => {
    if (query) fetchByQuery(query).then(data => setMovies(data.results));
  }, [query]);

  return (
    <div className={styles.pageContainer}>
      <form onSubmit={handleSubmit}>
        <input name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      {movies.length === 0 && query && (
        <p>No results found for "{query}".</p>
      )}
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;