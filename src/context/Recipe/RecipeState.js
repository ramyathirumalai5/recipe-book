import React, {useReducer} from 'react';
import uuid from 'react-uuid';
import RecipeContext from './recipeContext';
import recipeReducer from './recipeReducer';

import { ADD_RECIPE } from './../types';
    

const RecipeState = (props) =>{

    const initialState = {
        recipeList :[
            {
                id:1,
                name:'Chicken Lasagne',
                ingredients:`1 Tbsp olive oil 1 medium onion,
                finely chopped
                4 Tbsp unsalted butter
                1/3 cup all-purpose flour
                2 1/2 cups chicken broth
                1 1/2 cups half and half, (or equal parts of heavy cream and milk)
                3 garlic cloves, minced`,
                description:'Place a pot or large saucepan over medium heat, add 1 Tbsp olive oil and saute onions for 3-4 minutes or until softened. Add 4 Tbsp butter and whisk in 1/3 cup flour. Continue whisking 3 minutes or until flour mixture is golden.',
                imageUrl: 'https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },

            {  id:2,
                name:'Spinach Enchilada',
                ingredients:`1 Tbsp olive oil 1 medium onion,
                finely chopped
                4 Tbsp unsalted butter
                1/3 cup all-purpose flour
                2 1/2 cups chicken broth
                1 1/2 cups half and half, (or equal parts of heavy cream and milk)
                3 garlic cloves, minced`,
                description:'Warm one tortilla in a skillet over medium heat until flexible, about 15 seconds. Repeat to warm remaining tortillas. Spoon about 1/4 cup spinach mixture onto the center of each tortilla, roll tortilla around filling, and place into a 9x13-inch baking dish with the seam facing down. Pour enchilada sauce over top and sprinkle with remaining 1 cup Monterey Jack.',
                imageUrl: 'https://media.istockphoto.com/id/984229014/photo/beef-enchiladas-with-tomato-sauce-and-cheese.jpg?s=1024x1024&w=is&k=20&c=jjB1MvtRYNtIRVNVRmkNYunfxMurR_E3HldIIYzVwoc='

            },

            {
                id:3,
                name:'Beef Fajita',
                ingredients:`1 Tbsp olive oil 1 medium onion,
                finely chopped
                4 Tbsp unsalted butter
                1/3 cup all-purpose flour
                2 1/2 cups chicken broth
                1 1/2 cups half and half, (or equal parts of heavy cream and milk)
                3 garlic cloves, minced`,
                description:'When ready to cook, heat a large skillet over medium-high heat. Pour the vegetables into the skillet and cook until just tender crisp, about 5 minutes. Remove the vegetables from the skillet to a plate and add steak strips to the same skillet. When the steak is cooked throughout (about 7-10 minutes), add vegetables back to the skillet along with the reserved marinade.',
                imageUrl: 'https://media.istockphoto.com/id/525356135/photo/beef-fajitas.jpg?s=1024x1024&w=is&k=20&c=qx39c_niMNPQVDNPZQq7aecU02iqw8MzNw2xrvhtNow='
            }
        ]
    }; //end of intial state

const[state,dispatch] = useReducer(recipeReducer,initialState);

//Add a new Recipe
const addRecipe = (newRecipe) =>{
 newRecipe.id = uuid();
 dispatch({
    type:ADD_RECIPE,
    payload:newRecipe
 })
 console.log(state.recipeList);
}





return(
    <RecipeContext.Provider value = {{
      recipeList:state.recipeList,
      addRecipe
    }}>
     {props.children}
    </RecipeContext.Provider>
)
}

export default RecipeState;