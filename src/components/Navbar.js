function Navbar() {
  return (
    <nav className="fixed shadow-md z-50 w-full px-6 bg-gray-800 flex flex-wrap items-center py-2">
      <div className="flex-1 flex">
        <a href="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
          App Name
        </a>
      </div>
      <div className="flex space-x-4">
        <a href="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
          Heroes
        </a>
        <a href="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
          Team
        </a>
        <a href="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
          Pro Players
        </a>
      </div>
    </nav>
  )
}

export default Navbar