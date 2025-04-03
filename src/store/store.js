import {createStore, combineReducers, compose} from 'redux'
import { favoritesReducer } from './Reducers/favoritesReducer'
import {searchReducer} from './Reducers/searchReducer';
import { historyReducer } from './Reducers/historyReducer';

const rootReducer = combineReducers({
    favorites:favoritesReducer,
    search: searchReducer,
    searchHistory: historyReducer,
})

const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(rootReducer, composeEnhancers);