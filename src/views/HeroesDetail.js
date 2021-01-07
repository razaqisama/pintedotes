import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {setFavorites} from '../store/actions'
import {useState, useEffect} from 'react'
import Loader from '../components/Loader'

function HeroesDetail () {
  const dispatch = useDispatch()
  const {id} = useParams()
  const hero = useSelector(state => state.heroesReducer.heroes[id])
  const lore = useSelector(state => state.loresReducer.lores)
  const heroLoading = useSelector(state => state.heroesReducer.loading);
  const loreLoading = useSelector(state => state.loresReducer.loading);
  const favorite = useSelector(state => state.favoritesReducer.favorites)
  
  const [favorited, setFavorited] = useState(false)
  
  useEffect(()=>{
    for(let i = 0; i < favorite.length; i++){
      if(favorite[i].id === hero.id){
        setFavorited(true);
      }
    }
  }, [favorite])

  function handleUnfavorite (id) {
    setFavorited(false);
    dispatch(setFavorites(id));
  }
  function handleFavorite (id) {
    dispatch(setFavorites(id));
  }
  
  let favoriteButton = null;
  let content = null;

  if(heroLoading || loreLoading) {
    content = <Loader />
  } else {

    if(favorited) {
      favoriteButton = 
      <button 
        className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-50"
        onClick={(e)=> {
          e.preventDefault()
          handleUnfavorite(hero.id)
        }}
      >
      <i className="fa fa-heart text-3xl text-red-600 hover:text-gray-500"></i>
      </button>
    } else {
      favoriteButton = <button 
        className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        onClick={(e)=> {
          e.preventDefault()
          handleFavorite(hero.id)
        }}
      >
        <i className="fa fa-heart text-2xl text-red-400 hover:text-red-600"></i>
      </button>
    }
    let loreHero = lore[hero.name.split('hero_')[1]];
    
    content = 
    <div className="flex flex-wrap md items-center h-screen">
      <div className="bg-white w-full md:w-1/2 h-screen">
        <div className="mx-12">
          <h1 className="text-6xl font-bold mt-16">{hero.localized_name}</h1>
          <div className="flex mt-4 font-light text-gray-500">
            <div className="pr-4">
              <span className="uppercase">Role</span>
              <p className="text-2xl text-gray-900 font-semibold pt-2">{hero.roles[0]}</p>
            </div>
            <div className="pr-4">
              <span className="uppercase">Attack Type</span>
              <p className="text-2xl text-gray-900 font-semibold pt-2">{hero.attack_type}</p>
            </div>
            <div className="pr-4">
              <span className="uppercase">Attribute</span>
              <p className="text-2xl text-gray-900 font-semibold pt-2">{hero.primary_attr}</p>
            </div>
          </div>
          <div className="h-80 overflow-auto">
            <div
              className="description w-full sm: mt-4 text-gray-500 text-sm"
            >
              {loreHero}
            </div>
          </div>  
            {favoriteButton}
        </div>
      </div>
      <div className="bg-red-600 w-full md:w-1/2">
        <img
          src={`https://api.opendota.com${hero.img}`}
          className="h-screen w-full"
          alt=""
        />
      </div>
    </div>
  }

  return (
    <div>
      {content}
    </div>
  )
}

export default HeroesDetail