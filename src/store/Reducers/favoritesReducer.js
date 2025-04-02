const defaultState = {
    userFavorites: []
}

const ADD_FAVORITES = "ADD_FAVORITES"
const REMOVE_FAVORITES = "REMOVE_FAVORITES"

export const favoritesReducer = (state = defaultState, action) =>{
    switch(action.type){
        case ADD_FAVORITES:
            return{...state, userFavorites:[...state.userFavorites, action.payload]}

        case REMOVE_FAVORITES:
            return{...state, userFavorites: state.userFavorites.filter((element)=>element.id !== action.payload)}

        default:
             return state
    }
}

export const addFavoritesAction = (payload) => ({type:ADD_FAVORITES, payload})
export const removeFavoritesAction = payload =>({type:REMOVE_FAVORITES, payload})