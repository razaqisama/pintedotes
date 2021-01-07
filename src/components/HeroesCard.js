import {Link} from 'react-router-dom'
import {setFavorites} from '../store/actions'
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';

function HeroesCard (props) {
  const image = `https://api.opendota.com${props.hiiro.img}`
  const dispatch = useDispatch()
  const favorite = useSelector(state => state.favoritesReducer.favorites)
  const [favorited, setFavorited] = useState(false)
  useEffect(()=>{
    for(let i = 0; i < favorite.length; i++){
      if(favorite[i].id === props.hiiro.id){
        setFavorited(true);
      }
    }
  }, [favorite, props.hiiro.id])
  function handleFavorite (id) {
    dispatch(setFavorites(id));
  }

  function handleUnfavorite (id) {
    setFavorited(false);
    dispatch(setFavorites(id));
  }

  let favoriteButton = null
  if(favorited) {
    favoriteButton = 
    <button 
      className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-50"
      onClick={(e)=> {
        e.preventDefault()
        handleUnfavorite(props.hiiro.id)
      }}
    >
    <i className="fa fa-heart text-3xl text-red-600 hover:text-gray-500"></i>
    </button>
  } else {
    favoriteButton = <button 
      className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      onClick={(e)=> {
        e.preventDefault()
        handleFavorite(props.hiiro.id)
      }}
    >
      <i className="fa fa-heart text-2xl text-red-400 hover:text-red-600"></i>
    </button>
  }

  return (
    <div className="mb-5 mt-10 px-5 w-1/4 overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <Link to={`/heroes/${props.hiiro.id}`}>
          <img alt="someNiceImages" className="block h-56 w-full opacity-90 hover:opacity-100" src={image}></img>
        </Link>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            {props.hiiro.localized_name}
          </h1>
          <p>
            {props.hiiro.attack_type}({props.hiiro.primary_attr})
          </p>
        </header>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <p className="text-sm">
              {props.hiiro.roles.join(', ')}
          </p>
          <div className="no-underline text-grey-darker hover:text-red-dark">
              <span className="hidden">Like</span>
              {favoriteButton}
              {/* <button 
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={(e)=> {
                  e.preventDefault()
                  handleFavorite(props.hiiro.id)
                }}
              >
                <i className="fa fa-heart text-2xl text-red-400 hover:text-red-600"></i>
              </button> */}
          </div>
        </footer>
      </div>
    </div>
  )
}
export default HeroesCard