import group from '../assets/Group 27.png'
import fb from '../assets/Facebook.png'
import lock from '../assets/Vector.png'

const Home = () => {
   
    return (
        <div>
            {/* hero */}
            <div>
            <div className="hero bg-base-200 min-h-screen p-12 ">
  <div className="hero-content flex-col lg:flex-row justify-between items-center gap-20">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl  mb-10 poppins-semibold-italic ">Explore your <span className='text-[#0096C8]'>hobby</span> or <span className='text-[#8064A2]'>passion</span></h1>
      <p className="text-xs mb-10 ">
      Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classNamees, workshops, and places to practice, participate or perhtmlForm. Your hobby may be about visual or perhtmlForming arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
      <br  />
      
      If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
      

      </p>
      <img src={group} alt="" />
    </div>
    <div className="card  w-full max-w-sm shrink-0 ">
   
   

    <div className=" px-6 py-8 md:px-8 ">
        

       <div className='flex lg:flex-row justify-start items-center gap-3 '>
       <a href="">
       <p className="mt-3 text-xl  text-gray-600 dark:text-gray-200 hover:text-[#8064A2] hover:underline ">
            Sign In
        </p>
       </a>
        <p className="mt-3 text-xl  text-gray-600 dark:text-gray-200 hover:text-[#8064A2] hover:underline">
           Join In
        </p>
       </div>

        <a href="#" className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transhtmlForm border border-black  rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <div className="px-4 py-2">
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                    <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                    <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">Continue with Google</span>
        </a>
        <a href="#" className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transhtmlForm border border-black rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <div className="px-4 py-2">
                <img src={fb} alt="" />
                
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">Continue with Facebook</span>
        </a>

        <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <a href="#" className="text-bold text-center text-black   dark:text-gray-400 hover:underline">or contact with</a>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>

        <div className="mt-4">
            
            <input id="LoggingEmailAddress" placeholder='Email' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
        </div>

        <div className="mt-4">
            

            <input id="loggingPassword" placeholder='Password' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
            <div className="flex justify-between mt-5 items-center">
            <div>
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label htmlFor="default-checkbox" className="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
              <div className='flex justify-between gap-2'>
              <img src={lock} alt="" />
                <a href="#" className="text-xs text-black dark:text-gray-300 hover:underline">
                   Forget Password?</a>
              </div>
            </div>
        </div>

        <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transhtmlForm  border-2 border-black  rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Continue
            </button>
        </div>

        
    </div>
</div>
    </div>
  </div>
</div>

            </div>
      
    );
};

export default Home;