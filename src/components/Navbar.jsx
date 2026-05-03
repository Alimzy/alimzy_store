function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 border-b">

      <h1 className="text-xl font-bold tracking-widest">SHOP.CO</h1>

    
      <ul className="flex gap-8 text-sm">
        <li className="cursor-pointer hover:underline">Shop</li>
        <li className="cursor-pointer hover:underline">On Sale</li>
        <li className="cursor-pointer hover:underline">New Arrivals</li>
        <li className="cursor-pointer hover:underline">Brands</li>
      </ul>

       <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search for products..."
          className="bg-transparent outline-none text-sm w-48"
        />
      </div>

      
      <div className="flex items-center gap-4">
        <button className="text-xl">🛒</button>
        <button className="text-xl">👤</button>
      </div>

    </nav>
  )
}

export default Navbar