import {createStore, combineReducers} from 'redux'
import { favoritesReducer } from './Reducers/favoritesReducer'

const rootReducer = combineReducers({
    favorites:favoritesReducer
})

export const store = createStore(rootReducer)