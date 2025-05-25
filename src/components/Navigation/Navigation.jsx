import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <div className={styles.navContainer}>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/" className={styles.link}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={styles.link}>Movies</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
