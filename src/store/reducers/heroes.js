const intitialState = {
  heroes: {},
  loading: true
}

function heroesReducer(state = intitialState, action){
  switch(action.type) {
    case "SET_HEROES":
      return { ...state, heroes: action.payload};
    case "SET_LOADING_HEROES":
      return { ...state, loading: action.payload};
    default:
      return state
  }
}

export default heroesReducer;