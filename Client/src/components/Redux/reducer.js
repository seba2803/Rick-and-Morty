import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";
const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV: return {...state, myFavorites: [...state.myFavorites,action.payload], allCharacters: [...state.allCharacters,action.payload]};

        case REMOVE_FAV: return {...state, myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload), allCharacters: state.myFavorites.filter(fav => fav.id !== action.payload)};

        case FILTER: 
        const allCharactersfav = state.allCharacters.filter(element => element.gender === action.payload);
        return {...state, myFavorites: allCharactersfav};

        case ORDER: 
        const allCharacterssave = [...state.allCharacters];
        return {...state, myFavorites: allCharacterssave.sort((a,b)=>{
            if(action.payload === 'A'){
                return a.id - b.id;
            }else
                return b.id - a.id;
        })}

        default: return {...state};
    }
}

export default reducer;