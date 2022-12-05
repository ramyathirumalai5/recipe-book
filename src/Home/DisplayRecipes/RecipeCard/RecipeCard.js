import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeCard.module.css';

const RecipeCard = ({recipe}) => {
  
  return (
    <div>
      <div className={styles.container}>
        
      <img src = {recipe.imageUrl} className={styles.image} />
       
  <h3 className={styles.recipeName}>{recipe.name}</h3>
  <p className={styles.description}>{recipe.description.substring(0,100)}</p>
  
    </div>
    
     <Link to={`/${recipe.id}`}className={styles.viewMore}> View More</Link>
    
    {/*  <button className={styles.viewMore}>View more...</button> */}
    </div>
  )
}

export default RecipeCard