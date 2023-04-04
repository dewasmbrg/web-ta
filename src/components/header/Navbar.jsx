import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="border-b-2 border-gray-700 flex  items-center py-[25px]">
            <img
                src={logo}
                alt="logo"
                className="w-[50px] h-[50px] bg-white absolute rounded-md"
            />

            <h1 className="w-full flex justify-center text-3xl text-blue-500 font-bold">
                STROKE PREDICTION
            </h1>
        </nav>
    );
};

export default Navbar;
