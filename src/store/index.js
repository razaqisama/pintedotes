import {createStore} from 'redux'

const initialState = {
  heroes: {},
  lores: {},
  favorites: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "heroes/setHeroes":
      return {...state, heroes: action.payload } 
    case "heroes/setLore":
      return {...state, lores: action.payload}
    case "favorite/setFavorites":
      const newFav = state.heroes[action.payload]
      return { ...state, favorites: [ ...state.favorites, newFav ] }
    case "favorite/deleteFavorite":
      let clone = {...state}
      clone.favorites.splice(action.payload, 1);
      console.log(clone)
      return state
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store