import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Star from './star.svg'

function Header() {
    let [ open, setOpen ] = useState(false)
    
    function toggleMenu() {
        setOpen(open = !open)
    }

    return (
        <div>
            <div className="Header">
                 <nav className="shadow">
                 <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                 <div className="relative flex items-center justify-between h-16">
                     <div className="absolute inset-y-0 left-0 flex justify-between items-center sm:hidden">
                         <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                             <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                             </svg>
                             <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                             </svg>
                         </button>
                         <Link to="/" className="px-3 py-2 text-blue-900">Start Your Day</Link>
                     </div>
                     <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                     <div className="flex-shrink-0 hidden sm:block">
                     <Link to="/" className="px-3 py-2 text-blue-900">Start Your Day</Link>
                     </div>
                     <div className="hidden sm:block sm:ml-6">
                         <div className="flex">
                             <Link to="/" className="App-link block px-3 py-2 rounded-md text-base font-medium text-blue-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Home</Link>
                             <Link to="/news" className="App-link block px-3 py-2 rounded-md text-base font-medium text-blue-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">News</Link>
                             <Link to="/todo" className="App-link block px-3 py-2 rounded-md text-base font-medium text-blue-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Todo</Link>
                             <Link to="/weather" className="App-link block px-3 py-2 rounded-md text-base font-medium text-blue-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Weather</Link>
                             {/* <Link to="/favorites" className="App-link flex block px-3 py-2 rounded-md text-base font-medium text-blue-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Favorites <img className="ml-2" src={Star} alt="starred"/></Link> */}
                         </div>
                     </div>
                     </div>
                 </div>
                 </div>
                 { open && (
                 <div className="block">
                 <div className="px-2 pt-2 pb-3">
                     <Link to="/" className="App-link block px-3 py-2 rounded-md text-base font-medium text-blue-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Home</Link>
                     <Link to="/news" className="App-link block px-3 py-2 rounded-md text-base font-medium text-blue-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">News</Link>
                     <Link to="/todo" className="App-link block px-3 py-2 rounded-md text-base font-medium text-blue-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Todo</Link>
                     <Link to="/weather" className="App-link block px-3 py-2 rounded-md text-base font-medium text-blue-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Weather</Link>
                     {/* <Link to="/favorites" className="App-link block px-3 py-2 rounded-md text-base font-medium text-blue-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"><span className="flex justify-center">Favorites <img className="ml-2" src={Star} alt="starred"/></span></Link> */}
                 </div>
                 </div>
                 )}
              </nav>
             </div>
        </div>
    )
}

export default Header;
