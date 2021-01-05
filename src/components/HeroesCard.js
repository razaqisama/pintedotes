function HeroesCard (props) {
  const image = `https://api.opendota.com${props.hiiro.img}`
  return (
    <div className="mb-5 mt-10 px-5 w-1/4 overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <a href="/img">
          <img alt="someNiceImages" className="block h-56 w-full opacity-90 hover:opacity-100" src={image}></img>
        </a>
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
              <button className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <i className="fa fa-heart text-2xl text-red-400 hover:text-red-500"></i>
              </button>
          </a>
        </footer>
      </div>
    </div>
  )
}
export default HeroesCard