import React from 'react';
import {useParams} from 'react-router-dom';

const RecipeDetail = () => {

    const {id} = useParams();
  return (
    <div style = {{color:'white'}}>RecipeDetail for the id :{id} </div>
  )
}

export default RecipeDetail