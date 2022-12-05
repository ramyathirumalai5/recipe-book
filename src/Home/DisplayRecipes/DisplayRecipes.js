import React,{useContext} from 'react';
import RecipeContext from '../../context/Recipe/recipeContext';
import RecipeCard from './RecipeCard/RecipeCard';
import styles from './DisplayRecipes.module.css';

const DisplayRecipes = () => {

    const recipeContext = useContext(RecipeContext);
    const{recipeList} = recipeContext;
   
    
  return (
    <div className={styles.container}>
    {
        recipeList.map(recipe => (
            <RecipeCard key = {recipe.id} recipe ={recipe}/>
        ))
    }
   
    </div>
  )
}

export default DisplayRecipes;