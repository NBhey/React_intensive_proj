import { SET_SEARCH_OBJECT, CLEAR_SEARCH_OBJECT } from "../actions/actionsSearch";

const initialSearch={
  searchObject: {search:''} 
};

export const searchReducer=(state=initialSearch, action)=>{
    switch (action.type) {
        case SET_SEARCH_OBJECT:
            return {
              ...state,
              searchObject: action.payload,
            };
          case CLEAR_SEARCH_OBJECT:
            return {
              ...state,
              searchObject: {},
            };
          default:
            return state;
    }
}

