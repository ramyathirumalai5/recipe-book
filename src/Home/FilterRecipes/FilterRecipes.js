import React from 'react';
import styles from './FilterRecipes.module.css';


const FilterRecipes = () => {
  return (
    <div>

        <input  className = {styles.inputBox} placeholder= "Search a recipe..." type ="text" />
    </div>
  )
}

export default FilterRecipes;