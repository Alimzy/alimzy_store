import { ShoppingCart, User, Search } from 'lucide-react'

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
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search for products..."
          className="bg-transparent outline-none text-sm w-48"
        />
      </div>

      
      <div className="flex items-center gap-4">
        <button><ShoppingCart size={20} /></button>
        <button><User size={20} /></button>
      </div>

    </nav>
  )
}

export default Navbar