import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/tmdbApi';
import styles from './MovieReviews.module.css';

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div className={styles.reviewsContainer}>
      {reviews.length === 0 ? (
        <p>No reviews found.</p>
      ) : (
        <ul className={styles.list}>
          {reviews.map(review => (
            <li key={review.id}>
              <strong>{review.author}</strong>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieReviews;