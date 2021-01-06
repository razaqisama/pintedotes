import {Link} from 'react-router-dom'
import {setFavorites, deleteFavorite} from '../store/actions'
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux'

function HeroesCard (props) {
  const image = `https://api.opendota.com${props.hiiro.img}`
  const favorite = useSelector(state => state.favorites)

  function handleFavorite (id) {
    dispatch(setFavorites(id));
  }

  function handleUnfavorite (id) {
    dispatch(deleteFavorite(id));
  }

  let favoriteButton = 
    <button 
      className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      onClick={(e)=> {
        e.preventDefault()
        handleFavorite(props.hiiro.id)
      }}
    >
      <i className="fa fa-heart text-2xl text-red-400 hover:text-red-600"></i>
    </button>

  if(favorite) {
    for(let i = 0; i < favorite.length; i++){
      if(favorite[i].id === props.hiiro.id){
        favoriteButton = 
        <button 
          className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-50"
          onClick={(e)=> {
            e.preventDefault()
            handleUnfavorite(props.hiior.id)
          }}
        >
          <i className="fa fa-heart text-3xl text-red-600 hover:text-gray-500"></i>
        </button>
      }
    }
  }

  const dispatch = useDispatch()

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
          <a className="no-underline text-grey-darker hover:text-red-dark" href="/">
              <span className="hidden">Like</span>
              {favoriteButton}
          </a>
        </footer>
      </div>
    </div>
  )
}
export default HeroesCard