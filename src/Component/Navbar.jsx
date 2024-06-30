import logo from '../assets/HobbyCue Logo.png'
import layer from '../assets/Layer_2.png'
import hobby from '../assets/Hobbies.png'
import { FaBookmark, FaShoppingCart } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <img src={logo} alt="" />
    <htmlForm className="max-w-md mx-auto">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
       
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search.." required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#8064A2] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </button>
    </div>
</htmlForm>
  </div>
  

  


  <div className="navbar-end hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 flex lg:flex-row items-center">
      <li><a>
        <img src={layer} alt="" />
        Explore</a></li>
      <li><a>
      <img src={hobby} alt="" />
        Hobbies</a></li>
      <li><a href=""><FaBookmark className='text-[#8064A2]' /></a></li>
      <li><a href=""><IoIosNotifications className='text-xl text-[#8064A2]' /></a></li>
      <li><a href=""><FaShoppingCart className='text-[#8064A2]' /></a></li>
     
    </ul>
    <button className="btn btn-outline  text-[#8064A2]">Sign In</button>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;