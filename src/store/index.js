import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import heroesReducer from './reducers/heroes'
import loresReducer from './reducers/lores'
import favoritesReducer from './reducers/favorite'


const rootReducer = combineReducers({
  heroesReducer,
  loresReducer,
  favoritesReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store