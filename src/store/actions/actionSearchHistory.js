
export const ADD_SEARCH_HISTORY='ADD_SEARCH_HISTORY';
export const CLEAR_SEARCH_HISTORY='CLEAR_SEARCH_HISTORY';

export const addSearchHistory=(params)=>({
    type: ADD_SEARCH_HISTORY,
    payload: params,
}
);

export const clearSearchHistory=()=>({
    type: CLEAR_SEARCH_HISTORY,
})