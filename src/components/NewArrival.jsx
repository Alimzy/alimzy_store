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
        </div>
    )
}

export default NewArrival