
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Header/Header.js';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home.js';
import AddRecipe from './AddRecipe/AddRecipe';
import RecipeDetail from './Home/DisplayRecipes/RecipeCard/RecipeDetail/RecipeDetail';

import RecipeState from './context/Recipe/RecipeState';

function App() {
  return (
    <RecipeState>
    <BrowserRouter>
    <Header />
    <div className='container'>
    <Navbar className = 'item1' />
    <Routes className = 'item2'>
     <Route path = "/" element= {<Home />} />
     <Route path = "/addRecipe" element  = {<AddRecipe />} />
     <Route path = "/:id" element = {<RecipeDetail />} />
    </Routes>
    </div>
    </BrowserRouter>
    </RecipeState>
  );
}

export default App;
