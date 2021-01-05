import {useFetch} from '../hooks/ApiRequest'
import Loader from './Loader'
import HeroesCard from './HeroesCard'
import ErrorAllert from './ErrorAlert'
function HeroesList () {
  let [heroes] = useFetch('https://api.opendota.com/api/heroStats');
  let content = null;
  if(heroes.error) {
    content = <ErrorAllert />
  } else {
    if(heroes.loading) {
      content = <Loader />
    } else {
      content = 
      <div className="flex flex-wrap justify-center items-center -mx-5 overflow-hidden">
      {
        heroes.data.map(hero => {
            return <HeroesCard key={hero.id} hiiro={hero} />
          })
      }
      </div>
    }
  }
  return (
    <div className="container mx-auto p-8">
      {content}
    </div>

  )
}

export default HeroesList
