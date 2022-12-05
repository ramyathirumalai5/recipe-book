import { ADD_RECIPE } from "../types"

export default(state,action) =>{
 switch(action.type){
    case ADD_RECIPE:
        return{
            ...state,
            recipeList:[...state.recipeList,
            action.payload]
        }

        default: return state;
 }
}

