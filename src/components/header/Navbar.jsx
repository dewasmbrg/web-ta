import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="border-b-2 border-gray-700 flex  items-center py-[25px]">
            <Link to={"/"} className="absolute">
                <img
                    src={logo}
                    alt="logo"
                    className="rounded-md w-[50px] h-[50px] bg-white"
                />
            </Link>
            <h1 className="w-full flex justify-center text-3xl text-blue-500 font-bold">
                STROKE PREDICTION
            </h1>
        </nav>
    );
};

export default Navbar;
