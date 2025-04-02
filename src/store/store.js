import {createStore, combineReducers} from 'redux'
import { favoritesReducer } from './Reducers/favoritesReducer'
import {searchReducer} from './Reducers/searchReducer';

const rootReducer = combineReducers({
    favorites:favoritesReducer,
    search: searchReducer,
})

export const store = createStore(rootReducer);