const intitialState = {
  favorites: [],
  loading: false
}

function favoritesReducer(state = intitialState, action){
  switch(action.type) {
    case "SET_FAVORITES":
      return { ...state, favorites: [...state.favorites, action.payload]};
    case "SET_LOADING_FAVORITE":
      return { ...state, loading: action.payload};
    case "DELETE_FAVORITES":
      console.log('ke delete')
      return { ...state, favorites: action.payload}
    default:
      return state
  }
}

export default favoritesReducer;