const intitialState = {
  lores: {},
  loading: true
}

function loresReducer(state = intitialState, action){
  switch(action.type) {
    case "SET_LORES":
      return { ...state, lores: action.payload};
    case "SET_LOADING_LORE":
      return { ...state, loading: action.payload};
    default:
      return state
  }
}

export default loresReducer