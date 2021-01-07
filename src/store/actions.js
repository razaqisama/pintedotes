export function setHeroes(payload) {
  return {
    type: "SET_HEROES",
    payload
  }
}

export function setLore(payload) {
  return {
    type: "SET_LORES",
    payload
  }
}

export function setLoadingHero(payload) {
  return {
    type: "SET_LOADING_HEROES",
    payload
  }
}

export function setLoadingLore(payload) {
  return {
    type: "SET_LOADING_LORE",
    payload
  }
}

export function fetchHeroes() {
  return (dispatch, getState) => {
    dispatch(setLoadingHero(true));
    fetch("https://api.opendota.com/api/constants/heroes")
    .then(response => response.json())
    .then(data => {
      dispatch(setHeroes(data))
      dispatch(setLoadingHero(false))
    })
    .catch(err => {
      console.log(err)
    })
  }
}
export function fetchLore() {
  return (dispatch, getState) => {
    dispatch(setLoadingLore(true));
    fetch("https://api.opendota.com/api/constants/hero_lore")
    .then(response => response.json())
    .then(data => {
      dispatch(setLore(data))
      dispatch(setLoadingLore(false))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function setFavorites(payload) {
  return (dispatch, getState) => {
    const newFav = getState().heroesReducer.heroes[payload];
    const allFav = getState().favoritesReducer.favorites;
    let isForDelete = allFav.includes(newFav);
    if(isForDelete) {
      dispatch(deleteFavorite(payload));
    } else {
      dispatch({
        type: "SET_FAVORITES",
        payload: newFav
      })
    }
  }
}

export function deleteFavorite(payload){
  return (dispatch, getState) => {
    const allFav = getState().favoritesReducer.favorites;
    const newFav = allFav.filter((element)=>{
      if(element.id !== payload){
        return element;
      }
    });
    dispatch({
      type: "DELETE_FAVORITES",
      payload: newFav
    })
  }
  
}