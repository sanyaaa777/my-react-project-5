import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActors } from '../../tmdb/tmdbAPI';
import styles from './MovieCast.module.css';

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchActors(movieId).then(response => setCast(response.data.cast));
  }, [movieId]);

  return (
    <div className={styles.castContainer}>
      <ul className={styles.list}>
        {cast.map(actor => (
          <li key={actor.cast_id}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            )}
            <p>{actor.name} as {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast;