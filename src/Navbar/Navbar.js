import React from 'react';
import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.container}>
     <p><Link to = "/" className={styles.text1}>Home</Link> </p>
     <p><Link to = "/addRecipe" className={styles.text1}>Add Recipe</Link></p>

    </div>
  )
}
export default Navbar;