function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 border-b">
      <h1 className="text-xl font-bold">SHOP.CO</h1>
      <ul className="flex gap-6">
        <li>Shop</li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
      </ul>
    </nav>
  )
}

export default Navbar