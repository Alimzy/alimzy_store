import { ShoppingCart, User, Search } from 'lucide-react'
import { useState } from 'react'



function Navbar() {
  const [cartCount, setCartCount] = useState(0)
  
  return (
    <nav className="flex justify-between items-center px-10 py-4 border-b">

      <h1 className="text-xl font-bold tracking-widest">SHOP.CO</h1>

    
      <ul className="flex gap-8 text-sm">
        <li className="cursor-pointer hover:underline">Shop</li>
        <li className="cursor-pointer hover:underline">On Sale</li>
        <li className="cursor-pointer hover:underline">New Arrivals</li>
        <li className="cursor-pointer hover:underline">Brands</li>
      </ul>

       <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search for products..."
          className="bg-transparent outline-none text-sm w-48"
        />
      </div>

      
      <div className="flex items-center gap-4">
        <button className="relative text-xl" onClick={() => setCartCount(cartCount + 1)}>
    <ShoppingCart size={20} />
    {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            {cartCount}
        </span>
    )}
</button>
        <button><User size={20} /></button>
      </div>

    </nav>
  )
}

export default Navbar