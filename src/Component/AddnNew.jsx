import group from '../assets/groups_black_24dp (1) 1.png'
import location from '../assets/location_on_black_24dp 1.png'
import shoping from '../assets/shopping_basket_black_24dp (2) 1.png'
import event from '../assets/event_available_black_24dp 2.png'
import logo from '../assets/HobbyCue Logo v2 1.png'
import layer from '../assets/Layer_2.png'
import hobby from '../assets/Hobbies.png'
import face from '../assets/Ellipse 23.png'
import arrow from '../assets/Arrow.png'
import add from '../assets/Add.png'
import { FaBookmark, FaShoppingCart } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';

const AddnNew = () => {
    return (
        <div className='container mx-auto lg:px-8 py-8 px-3'>
            {/* nav */}
            <nav >
            <div>
            <div className="navbar mb-10 bg-base-100">
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
    <img src={face} alt="" />
    <img src={arrow} alt="" />
  </div>
  
</div>
        </div>
            </nav>
            {/* body */}
            <div className=''>
            <div className='flex flex-row justify-center items-center gap-2'>
            <img src={add} alt="" />
                <h1 className='text-center text-2xl font-bold'>Add Your Listing</h1>
            </div>
            <div className="p-12 grid grid-cols-1  lg:grid-cols-2 justify-center items-center gap-3">
           <div className="card bg-base-100  border-2 border-[#8064A2] hover:bg-[#8064A2] hover:text-white rounded-lg ">
  <div className="card-body">
    <h2 className="card-title">
        <img src={group} alt="" />
        People</h2>
    <p>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
    
  </div>
</div>
<div className="card bg-base-100  border-2 border-[#77933C] hover:bg-[#77933C] hover:text-white rounded-lg ">
  <div className="card-body">
    <h2 className="card-title">
    <img src={location} alt="" />
        Place</h2>
    <p>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
    
  </div>
</div>
<div className="card bg-base-100  border-2 border-[#C0504D] hover:bg-[#C0504D] hover:text-white rounded-lg ">
  <div className="card-body">
    <h2 className="card-title">
    <img src={shoping} alt="" />
        Product</h2>
    <p>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
    
  </div>
</div>
<div className="card bg-base-100  border-2 border-[#0096C8] hover:bg-[#0096C8] hover:text-white rounded-lg ">
  <div className="card-body">
    <h2 className="card-title">
        <img src={event} alt="" />
        Program</h2>
    <p>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
    
  </div>
</div>

            </div>
            </div>
            
        </div>
    );
};

export default AddnNew;