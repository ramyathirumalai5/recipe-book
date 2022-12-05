import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <p className={styles.heading}>Clean and delicious Kitchen</p>
        </div>
  )
}

export default Header;

