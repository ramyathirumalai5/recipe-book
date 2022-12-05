import React , {useState,useContext} from 'react';
import styles from './AddRecipe.module.css';
import RecipeContext from '../context/Recipe/recipeContext';


const AddRecipe = () => {

  const recipeContext = useContext(RecipeContext);
//  const[disabled, setDisabled] = useState(true);
 const [newRecipe,setNewRecipe] = useState({
 name:'',
 imageUrl:'',
 ingredients:'',
 description:''
 });
const disableButton = newRecipe.name == '' || newRecipe.imageUrl == '' || newRecipe.ingredients == '' || newRecipe.description == '';

 const onChange = (e) =>{
  
    setNewRecipe({...newRecipe,
       [e.target.name] : e.target.value});
 }
 //const[name,imageUrl,ingredients,description] = newRecipe;


const onSubmit = (e) =>{
  e.preventDefault();
  recipeContext.addRecipe(newRecipe);
  setNewRecipe({
    name:'',
    imageUrl:'',
    ingredients:'',
    description:''
  })
}

 return (
   <form onSubmit = {onSubmit} className={styles.container}> 
    
       
    <h2 className={styles.header}> Add a new recipe</h2> 
    //Recipe Name
    <input type="text" 
    placeholder="Name of the recipe" 
    name="name"
    value = {newRecipe.name}
    className={styles.input1}
    onChange={onChange}/>
    
    //Recipe Url
    <input type = "url" placeholder='Url of the image of the dish'
    name="imageUrl"
    value = {newRecipe.imageUrl}
    className={styles.input2}
    onChange={onChange}/>
     
     //Recipe Ingredients
    <textarea type="text"
    placeholder ='Ingredients'
    name="ingredients"
    value={newRecipe.ingredients}
    className={styles.ingredients}
    onChange = {onChange}/>
    
    //Recipe description
    <textarea placeholder='Recipe description'
    name="description"
    value={newRecipe.description} 
    className={styles.description} 
    onChange = {onChange}/>
    
    //Submit button
    <input className = {styles.button}
     type="submit"
     value="Publish Recipe"
     onSubmit = {onSubmit}
     disabled = {disableButton}
    />
    
  
    </form>
  )
}

export default AddRecipe;