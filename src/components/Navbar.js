import React, {useState} from 'react'
import { FaBars} from "react-icons/fa";
import { VscClose } from "react-icons/vsc";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div className="navbar">
              <nav className="flex items-center justify-between flex-wrap bg-indigo-700 p-3 fixed top-0 z-10 w-full">
           <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a className="text-white no-underline" href="#">
                 <span className="text-2xl pl-2 font-semibold">LOGO</span>
                </a>
        </div>
        {/* Humberger for mobile view */}
        <div className="block lg:hidden">
            <div onClick={handleClick} className="flex itms-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white ">
               { click ? <VscClose className="text-lg" /> : <FaBars />}
            </div>

        </div>
        {/* End */}
        <div onClick={handleClick} className={click ? "smScreen-inactiveNav " :"smScreen-Activenav " } >
    
       <ul className="list-reset lg:flex justify-end flex-1 items-center">
        <li className="mr-6">
            <a className="inline-block py-2 px-2 no-underline text-white hover:text-blue-300" href="/">Home</a>
        </li>


        <li className="mr-6">
            <a className="inline-block py-2 px-2 no-underline text-white hover:text-blue-300" href="/register">Register</a>
        </li>

        <li className="">
            <a className="inline-block py-2 px-2 no-underline text-white hover:text-blue-300" href="/login">Login</a>
        </li>
       </ul>
       </div>
    </nav>
        
        </div>
    )
}

export default Navbar
