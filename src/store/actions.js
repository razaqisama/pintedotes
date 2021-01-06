export function setHeroes(payload) {
  return {
    type: "heroes/setHeroes",
    payload
  }
}

export function setLore(payload) {
  return {
    type: "heroes/setLore",
    payload
  }
}

export function setFavorites(payload) {
  return {
    type: "favorite/setFavorites",
    payload
  }
}

export function deleteFavorite(payload){
  return {
    type: "favorite/deleteFavorite",
    payload
  }
}