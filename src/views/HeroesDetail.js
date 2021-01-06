import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Loader from '../components/Loader'

function HeroesDetail (props) {
  const {id} = useParams()
  const hero = useSelector(state => state.heroes[id])
  const lore = useSelector(state => state.lores)

  let content = null;

  if(!props.heroStatus.loading && !props.loreStatus.loading) {
    content = <Loader />
  } else {
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
          <div className="h-96 overflow-auto">
            <div
              className="description w-full sm: mt-4 text-gray-500 text-sm"
            >
              {loreHero}
            </div>
          </div>   
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