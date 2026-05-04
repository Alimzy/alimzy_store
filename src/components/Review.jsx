function Review() {
    return (
        <div className="px-16 py-12">

            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">OUR HAPPY CUSTOMERS</h2>
                <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full border border-black flex items-center justify-center">←</button>
                    <button className="w-8 h-8 rounded-full border border-black flex items-center justify-center">→</button>
                </div>
            </div>
            <div className="flex gap-6">
                <div className="border border-gray-200 rounded-2xl p-6 flex-1">
                     <p className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</p>
                    <h3 className="font-bold flex items-center gap-1">Sarah M. <img src="./Vector (3).png" className="w-4 h-4" /></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                </div>

                <div className="border border-gray-200 rounded-2xl p-6 flex-1">
                     <p className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</p>
                    <h3 className="font-bold flex items-center gap-1"> Alex K. <img src="./Vector (3).png" className="w-4 h-4" /></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                </div>
               
               <div className="border border-gray-200 rounded-2xl p-6 flex-1">
                     <p className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</p>
                    <h3 className="font-bold flex items-center gap-1">James L. <img src="./Vector (3).png" className="w-4 h-4" /></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                </div>
            </div>
        </div>
    )
}

export default Review