const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="flex justify-between items-center px-4">
        <a
          href="/"
          className="text-2xl font-bold text-gray-800 cursor-pointer hover:scale-110 transition duration-200 ease-in"
        >
          NearMe
        </a>

        <nav className="flex items-center gap-2">
          <label htmlFor="city-search" className="sr-only">
            Search for a city
          </label>
          <input
            id="city-search"
            type="text"
            placeholder="Enter city..."
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
            aria-label="Search city"
          />
          <button
            className="bg-black text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200 ease-in"
            aria-label="Search"
          >
            Search
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
