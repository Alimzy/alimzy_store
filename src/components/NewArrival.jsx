import ProductCard from "./ProductCard" 
function NewArrival() {
    return (
       
        <div className="px-16 py-12 text-center">
             <h2 className="text-3xl font-bold mb-8">NEW ARRIVALS</h2>
             <div className="flex gap-6 justify-center">
                <ProductCard name="High Fashion" price={120} />
                <ProductCard name="ZTTW" price={80} />
                <ProductCard name="BAZ" price={150} />
                <ProductCard name="NATIVE" price={60} />
             </div>
             <button className="mt-8 px-14 py-3 border border-black rounded-full text-sm hover:bg-black hover:text-white transition-colors">
  View All
</button>
        </div>
    )
}

export default NewArrival