import ProductCard from "./ProductCard" 
import { useState, useEffect } from 'react'
function NewArrival(props) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products?limit=4")
            const data = await response.json()
            setProducts(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    fetchProducts()
}, [])
    return (
       
        <div className="px-16 py-12 text-center">
             <h2 className="text-3xl font-bold mb-8">NEW ARRIVALS</h2>
             <div className="flex gap-6 justify-center">
                <ProductCard setCartCount={props.setCartCount} name="High Fashion" price={120} />
                <ProductCard setCartCount={props.setCartCount} name="ZTTW" price={80} />
                <ProductCard setCartCount={props.setCartCount} name="BAZ" price={150} />
                <ProductCard setCartCount={props.setCartCount} name="NATIVE" price={60} />
             </div>
             <button className="mt-8 -14 py-3 border border-black rounded-full text-sm hover:bg-black hover:text-white transition-colors">
  View All
</button>
        </div>
    )
}

export default NewArrival