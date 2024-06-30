import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Home from "./Home";


const Root = () => {
    return (
        <div >
            <Navbar ></Navbar>
            <Outlet></Outlet>
            <Home></Home>

            
        </div>
    );
};

export default Root;