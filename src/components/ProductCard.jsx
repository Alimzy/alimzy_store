function ProductCard(props){
    return(

        <div className=" relative bg-gray-100 w-60 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">    
            
              <img src="/product1.png" className="w-full h-64 object-cover bg-gray-100 "/>
              
              <div className="p-4">
                <h3 className="font-medium text-sm">{props.name}</h3>
                <p className="text-yellow-400 text-sm">⭐⭐⭐⭐</p>
                <p className="font-bold">${props.price.toFixed(2)}</p>
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors" onClick={() => props.setCartCount(prevCount => prevCount + 1)}>
                Add to Cart
              </button>
              </div>
              

          </div>
        

    
    )
    
}

export default ProductCard