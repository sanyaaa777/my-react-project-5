import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={styles.pageContainer}>
      <h2>Page not found</h2>
      <Link to="/">Go to homepage</Link>
    </div>
  );
}

export default NotFoundPage;