function ProductCard(props){
    return(

        <div className=" bg-gray-100 w-60 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">    
            
              <img src="/product1.png" className="w-full h-64 object-cover bg-gray-100 "/>
              
              <div className="p-4">
                <h3 className="font-medium text-sm">{props.name}</h3>
                <p className="text-yellow-400 text-sm">⭐⭐⭐⭐</p>
                <p className="font-bold">${props.price.toFixed(2)}</p>
              </div>
                        

          </div>
        

    
    )
    
}

export default ProductCard