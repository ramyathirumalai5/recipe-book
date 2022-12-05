import React from 'react'
import DisplayRecipes from './DisplayRecipes/DisplayRecipes';
import FilterRecipes from './FilterRecipes/FilterRecipes';

const Home = () => {
  return (
    <div>
     <h2 style = {{marginLeft:'10px', color:'white'}}>Recipes</h2>
     <FilterRecipes />
     <DisplayRecipes />

    </div>
  )
}

export default Home;