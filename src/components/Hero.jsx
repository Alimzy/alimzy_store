function Hero() {
  return (
   <div className="relative">
  
  <img src="/hero.png" className="w-full h-[600px] object-cover" />
  
  <div className="absolute top-0 left-0 h-full flex flex-col justify-center px-16 max-w-lg">
    <h1 className="text-5xl font-black leading-tight mb-4">Find Clothes That Matches Your Style</h1>
    <p className="text-sm text-gray-600 mb-6">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
    <button className="bg-black text-white px-8 py-3 rounded-full w-fit mb-10">Shop Now</button>
    <div className="flex gap-8">
            <div>
              <h2 className="text-2xl font-bold">200+</h2>
              <p className="text-xs text-gray-500">International Brands</p>
              </div>
            <div>
              <h2 className="text-2xl font-bold">2000+</h2>
              <p className="text-xs text-gray-500">High Quality Products</p>
              </div>
              <div>
              <h2 className="text-2xl font-bold">30,000+</h2>
              <p className="text-xs text-gray-500">Happy Customers</p>
              </div>
    </div>

  </div>
</div>
  )
}

export default Hero