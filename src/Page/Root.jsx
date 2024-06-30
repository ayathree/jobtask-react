import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Home from "./Home";


const Root = () => {
    return (
        <div className='container mx-auto lg:px-8 py-8 px-3 '>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Home></Home>

            
        </div>
    );
};

export default Root;