import {useSelector} from 'react-redux'
import HeroesCard from '../components/HeroesCard'

function Favorite () {
  const favorites = useSelector(state => state.favoritesReducer.favorites)
  console.log(favorites, 'Ini favorites')
  return (
    // <div>
    //   Ini Favorit
    // </div>
    <div className="container mx-auto p-8">
      <div className="flex flex-wrap justify-center items-center -mx-5 overflow-hidden">
      {
        favorites.map(index => {
            return <HeroesCard key={index.id} hiiro={index} />
          })
      }
      </div>
    </div>
  )
}

export default Favorite