import {useState, useEffect} from 'react'
import HeroesCard from './HeroesCard'


function HeroesList () {
  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    fetch('https://api.opendota.com/api/heroes')
      .then(response => response.json())
      .then(data => setHeroes(data)
    )
  }, [])
  return (
    <div className="flex flex-wrap justify-center items-center -mx-5 overflow-hidden">
      {
        heroes.map(hero => {
            return <HeroesCard key={hero.id} hiiro={hero}></HeroesCard>
          })
      }
    </div>
  )
}

export default HeroesList