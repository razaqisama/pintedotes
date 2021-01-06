import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="fixed shadow-md z-50 w-full px-6 bg-gray-800 flex flex-wrap items-center py-2">
      <div className="flex-1 flex">
        <NavLink exact to="/" className="active:bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
          App Name
        </NavLink>
      </div>
      <div className="flex space-x-4">
        <NavLink to="/heroes/:id" className="active:bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
          Heroes
        </NavLink>
        <NavLink to="/favorite" className="active:bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
          Favorite
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar