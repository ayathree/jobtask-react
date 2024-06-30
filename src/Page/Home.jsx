import group from '../assets/groups_black_24dp (1) 1.png';
import location from '../assets/location_on_black_24dp 1.png';
import shoping from '../assets/shopping_basket_black_24dp (2) 1.png';
import event from '../assets/event_available_black_24dp 2.png';
import add from '../assets/Add.png';
import qoute from '../assets/quote.png';
import audio from '../assets/Audio Track.png';
import group2 from '../assets/Group 108.png';
import grp3 from '../assets/Group 99.png';
import icons from '../assets/Group 64.png';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='lg:container lg:mx-auto lg:px-8 lg:py-8  '>
            {/* Card Section */}
            <div className="p-4 lg:p-12 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-3">
                <div className="card bg-base-100 border-2 rounded-lg">
                    <div className="card-body">
                        <h2 className="card-title">
                            <img src={group} alt="" />
                            People
                        </h2>
                        <p>Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.</p>
                        <div className="card-actions justify-start mt-10">
                            <button className="btn btn-outline border-2 text-[#8064A2]">Connect</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 border-2 rounded-lg">
                    <div className="card-body">
                        <h2 className="card-title">
                            <img src={location} alt="" />
                            Place
                        </h2>
                        <p>Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.</p>
                        <div className="card-actions justify-start mt-10">
                            <button className="btn btn-outline border-2 text-[#8064A2]">Meet Up</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 border-2 rounded-lg">
                    <div className="card-body">
                        <h2 className="card-title">
                            <img src={shoping} alt="" />
                            Product
                        </h2>
                        <p>Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.</p>
                        <div className="card-actions justify-start mt-10">
                            <button className="btn btn-outline border-2 text-[#8064A2]">Got it</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 border-2 rounded-lg">
                    <div className="card-body">
                        <h2 className="card-title">
                            <img src={event} alt="" />
                            Program
                        </h2>
                        <p>Find events, meetups and workshops related to your hobby. Register or buy tickets online.</p>
                        <div className="card-actions justify-start mt-14">
                            <button className="btn btn-outline border-2 text-[#8064A2]">Attend</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3 */}
            <div className="card bg-[#F7FDFF] rounded-lg  lg:p-12">
                <div className="card-body">
                    <div className="bg-white p-4 lg:p-12 m-4 lg:m-8 border-2">
                        <h2 className="card-title text-xs lg:text-base">
                            <img src={add} alt="" />
                            Add your own
                        </h2>
                        <p className="mt-10 text-xs lg:text-base">Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page</p>
                        <div className="card-actions justify-start mt-10">
                            <Link to={'/add'}>
                                <button className="btn btn-outline border-2 text-[#8064A2]">Add New</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 4 */}
            <div className="card">
                <div className="card-body">
                    <div className="bg-[#F7F5F9] p-4 lg:p-12  lg:m-8 border-2">
                        <h2 className="card-title">
                            <img src={qoute} alt="" />
                            Testimonials
                        </h2>
                        <p className="mt-10">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
                        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 items-center mt-10">
                            <img className="w-full lg:w-2/4" src={audio} alt="" />
                            <img className="w-full lg:w-1/4" src={group2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 5 */}
            <div className="card bg-[#F7FDFF] rounded-lg p-4 lg:p-12">
                <div className="card-body">
                    <div className=" lg:p-12  lg:m-8">
                        <h2 className="card-title lg:text-2xl text-base poppins-semibold-italic">
                            Your <span className="text-[#8064A2]">Hobby</span>,Your<span className="text-[#0096C8]">Community</span>
                        </h2>
                        <div className="card-actions justify-start mt-10">
                            <button className="btn text-white bg-[#8064A2]">Get Started</button>
                        </div>
                        <img className="mt-20" src={grp3} alt="" />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div>
                <footer className="footer text-black p-4 lg:p-10">
                    <nav>
                        <h6 className="footer-title">Hobbycue</h6>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Our Services</a>
                        <a className="link link-hover">Work with Us</a>
                        <a className="link link-hover">FAQ</a>
                        <a className="link link-hover">Contact Us</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">How Do I</h6>
                        <a className="link link-hover">Sign Up</a>
                        <a className="link link-hover">Add a Listing</a>
                        <a className="link link-hover">Claim Listing</a>
                        <a className="link link-hover">Post a Query</a>
                        <a className="link link-hover">Add a Blog Post</a>
                        <a className="link link-hover">Other Queries</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Quick Links</h6>
                        <a className="link link-hover">Listings</a>
                        <a className="link link-hover">Blog Posts</a>
                        <a className="link link-hover">Shop / Store</a>
                        <a className="link link-hover">Community</a>
                    </nav>
                    <form>
                        <h6 className="footer-title">Social Media</h6>
                        <fieldset className="form-control w-full lg:w-80">
                            <label className="label">
                                <img src={icons} alt="" />
                            </label>
                            <h6 className="footer-title mt-5 p-4">Invite Friends</h6>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="email id"
                                    className="input input-bordered border-2 border-[#8064A2] join-item"
                                />
                                <button className="btn bg-[#8064A2] join-item text-white">invite</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
                <footer className="footer footer-center bg-[#F7F5F9] text-base-content p-4">
                    <aside>
                        <p>© Purple Cues Private Limited</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Home;
