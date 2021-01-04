import React from 'react'

class HeroesCard extends React.Component {

  render () {
    return (
      <div className="my-5 px-5 w-1/3 overflow-hidden">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <a href="/img">
            <img alt="someNiceImages" className="block h-auto w-full" src="https://picsum.photos/600/400/?random"></img>
          </a>
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              {this.props.hiiro.localized_name}
            </h1>
            <p>
              {this.props.hiiro.attack_type}({this.props.hiiro.primary_attr})
            </p>
          </header>
          <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <p class="text-sm">
                {this.props.hiiro.roles.join(', ')}
            </p>
          </footer>
        </div>
      </div>
    )
  }
}

export default HeroesCard