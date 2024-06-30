import group from '../assets/groups_black_24dp (1) 1.png'
import location from '../assets/location_on_black_24dp 1.png'
import shoping from '../assets/shopping_basket_black_24dp (2) 1.png'
import event from '../assets/event_available_black_24dp 2.png'
import add from '../assets/Add.png'
import qoute from '../assets/quote.png'
import audio from '../assets/Audio Track.png'
import group2 from '../assets/Group 108.png'
import grp3 from '../assets/Group 99.png'


const Home = () => {
   
    return (
        <div>
            {/* card */}
            <div className="p-12 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-3">
           <div className="card bg-base-100  border-2 rounded-lg ">
  <div className="card-body">
    <h2 className="card-title">
        <img src={group} alt="" />
        People</h2>
    <p>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
    <div className="card-actions justify-start mt-10">
      <button className="btn btn-outline border-2 text-[#8064A2]">Connect</button>
    </div>
  </div>
</div>
<div className="card bg-base-100  border-2 rounded-lg ">
  <div className="card-body">
    <h2 className="card-title">
    <img src={location} alt="" />
        Place</h2>
    <p>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
    <div className="card-actions justify-start mt-10">
      <button className="btn btn-outline border-2 text-[#8064A2]">Meet Up</button>
    </div>
  </div>
</div>
<div className="card bg-base-100  border-2 rounded-lg ">
  <div className="card-body">
    <h2 className="card-title">
    <img src={shoping} alt="" />
        Product</h2>
    <p>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
    <div className="card-actions justify-start mt-10">
      <button className="btn btn-outline border-2 text-[#8064A2]">Got it</button>
    </div>
  </div>
</div>
<div className="card bg-base-100  border-2 rounded-lg ">
  <div className="card-body">
    <h2 className="card-title">
        <img src={event} alt="" />
        Program</h2>
    <p>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
    <div className="card-actions justify-start mt-14">
      <button className="btn btn-outline border-2 text-[#8064A2]">Attend</button>
    </div>
  </div>
</div>

            </div>
            {/* section 3 */}
            <div className="card bg-[#F7FDFF] rounded-lg">
  <div className="card-body ">
   <div className='bg-white p-12 m-8 border-2'>
   <h2 className="card-title">
    <img src={add} alt="" />
    Add your own</h2>
    <p className='mt-10'>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
    <div className="card-actions justify-start mt-10">
      <button className="btn btn-outline border-2 text-[#8064A2]">Add New</button>
    </div>
   </div>
  </div>
</div>
{/* section 4 */}
<div className="card ">
  <div className="card-body ">
   <div className='bg-[#F7F5F9] p-12 m-8 border-2'>
   <h2 className="card-title">
    <img src={qoute} alt="" />
    Testimonials</h2>
    <p className='mt-10'>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
    <div className="flex flex-row justify-between items-center   mt-10">
      <img className='w-2/4' src={audio} alt="" />
      <img className='w-1/4' src={group2} alt="" />
    </div>
   </div>
  </div>
</div>
{/* section 5 */}
<div className="card bg-[#F7FDFF] rounded-lg">
  <div className="card-body ">
   <div className=' p-12 m-8 '>
   <h2 className="card-title text-2xl poppins-semibold-italic">
   
    Your <span className='text-[#8064A2]'> Hobby</span>, Your <span className='text-[#0096C8]'>Community...</span></h2>
    <div className="card-actions justify-start mt-10">
      <button className="btn text-white   bg-[#8064A2]">Get Started</button>
    </div>
    
    <img className='mt-20' src={grp3} alt="" />
   </div>
  </div>
</div>



        </div>
      
    );
};

export default Home;