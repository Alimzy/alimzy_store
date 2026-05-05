function Footer() {
    return(
        <div className="px-16 pt-12 pb-6">
            <div  className="bg-black text-white rounded-3xl px-16 py-10 flex justify-between items-center mb-12">
                
                    <h3 className="text-3xl font-bold max-w-xs leading-tight">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
                   <div className="flex flex-col gap-3">
                    <div className="flex items-center bg-white rounded-full px-4 py-3 gap-2">
                        <span className="text-gray-400 text-sm">✉</span>
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            className="bg-transparent outline-none text-sm text-black w-56"
                        />
                    </div>
                    <button className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium">Subscribe to Newsletter</button> 
                   </div>
              
            </div>

            <div className="flex gap-12 mb-10">
                <div className="flex-1">
                    <h3 className="text-xl font-black tracking-widest mb-4">SHOP.CO</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">We have clothes that suits your style and which you're proud to wear. From women to men.</p>
                    <div className="flex gap-3">
                        <img src="./logo-twitter 2.png" className="w-6 h-6" />
                        <img src="./2.png" className="w-6 h-6" />
                        <img src="./3.png"  className="w-6 h-6" />
                        <img src="./4.png" className="w-6 h-6" />
                    </div>
                </div>
                <div>
                    <h3 className="font-bold mb-4">COMPANY</h3>
                    <ul className="flex flex-col gap-3 text-sm text-gray-500">
                        <li className="cursor-pointer hover:text-black">About</li>
                        <li className="cursor-pointer hover:text-black">Features</li>
                        <li className="cursor-pointer hover:text-black">Works</li>
                        <li className="cursor-pointer hover:text-black">Career</li>        
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4">HELP</h3>
                    <ul className="flex flex-col gap-3 text-sm text-gray-500">
                        <li className="cursor-pointer hover:text-black">Customer Support</li>
                        <li className="cursor-pointer hover:text-black">Delivery Details</li>
                        <li className="cursor-pointer hover:text-black">Terms & Conditions</li>
                        <li className="cursor-pointer hover:text-black">Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4">FAQ</h3>
                    <ul className="flex flex-col gap-3 text-sm text-gray-500">
                        <li className="cursor-pointer hover:text-black">Account</li>
                        <li className="cursor-pointer hover:text-black">Management Deliveries</li>
                        <li className="cursor-pointer hover:text-black">Orders</li>
                        <li className="cursor-pointer hover:text-black">Payments</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4">RESOURCES</h3>
                    <ul className="flex flex-col gap-3 text-sm text-gray-500">
                        <li className="cursor-pointer hover:text-black">Free eBooks</li>
                        <li className="cursor-pointer hover:text-black">Development Tutorial</li>
                        <li className="cursor-pointer hover:text-black">How to - Blog</li>
                        <li className="cursor-pointer hover:text-black">Youtube Playlist</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
                <p className="text-sm text-gray-500">Copyright © 2024 Shop.co. All rights reserved.</p>
                <div className="flex gap-3">
                    <img src="./Badge.png"className="h-6"/>
                    <img src="./Badge (1).png" className="h-6"/>
                    <img src="./Badge (3).png" className="h-6"/>
                    <img src="./Badge (4).png" className="h-6"/>    
                    <img src="./Badge (5).png" className="h-6"/>
                </div>
            </div>
        </div>
    )
}

export default Footer