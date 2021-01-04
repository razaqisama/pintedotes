import React from 'react'
import HeroesCard from './HeroesCard'

class HeroesList extends React.Component {
  constructor () {
    super()
    this.state = {
      heroes: []
    }
  }
  componentDidMount() {
    fetch('https://api.opendota.com/api/heroes')
      .then(response => response.json())
      .then(data => this.setState({
        heroes: data    
      })
    )
  }
  render () {
    return (
      <div className="flex flex-wrap justify-center items-center -mx-5 overflow-hidden">
        {
          this.state.heroes.map(hero => {
            console.log(hero, 'dari HeroesList')
            return <HeroesCard key={hero.id} hiiro={hero}></HeroesCard>
          })
        }
      </div>
    )
  }
}

export default HeroesList