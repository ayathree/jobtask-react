import logo from '../assets/HobbyCue Logo.png';
import layer from '../assets/Layer_2.png';
import hobby from '../assets/Hobbies.png';
import { FaBookmark, FaShoppingCart } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import arrow from '../assets/icons8_expand_arrow 1.png';
import search from '../assets/icons8_search 1.png';
import noti from '../assets/notifications_black_24dp 1.png';
import menu from '../assets/menu_black_24dp 1.png';

const Navbar = () => {
  return (
    <div className='lg:container lg:mx-auto lg:px-8 lg:py-8 px-3 '>
      <div className="navbar mb-10 bg-base-100">
        <div className="navbar-start flex items-center">
          <img src={logo} alt="HobbyCue Logo" className="mr-4" />
          <form className="max-w-md mx-auto hidden lg:block relative">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search.."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-[#8064A2] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center">
            <li>
              <a>
                <img src={layer} alt="" />
                Explore
              </a>
            </li>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="m-1">
                <img src={arrow} alt="" />
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>People - Community</a></li>
                <li><a>Places - Venues</a></li>
                <li><a>Programs - Events</a></li>
                <li><a>Products - Store</a></li>
                <li><a>Blogs</a></li>
              </ul>
            </div>
            <li>
              <a>
                <img src={hobby} alt="" />
                Hobbies
              </a>
            </li>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="m-1">
                <img src={arrow} alt="" />
              </div>
            </div>
            <li><a href=""><FaBookmark className='text-[#8064A2]' /></a></li>
            <li><a href=""><IoIosNotifications className='text-xl text-[#8064A2]' /></a></li>
            <li><a href=""><FaShoppingCart className='text-[#8064A2]' /></a></li>
          </ul>
          <button className="btn btn-outline text-[#8064A2]">Sign In</button>
        </div>
        <div className="navbar-end flex flex-row gap-2 lg:hidden">
          <img src={search} alt="Search" />
          <img src={noti} alt="Notifications" />
          <img src={menu} alt="Menu" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
