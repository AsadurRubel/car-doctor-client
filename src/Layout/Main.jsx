import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Shared/Footer";
import Navbar from "../Pages/Home/Shared/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Main;