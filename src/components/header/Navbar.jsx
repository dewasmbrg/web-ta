import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="border-b-2 border-gray-700 flex  items-center">
            <img
                src={logo}
                alt="logo"
                className="w-[50px] h-[50px] bg-white absolute"
            />

            <ul className="w-full flex justify-center gap-10 py-[25px] text-white font-[400] text-lg">
                <li>
                    <NavLink
                        to={"/"}
                        end
                        className="hover:duration-300 hover:text-[#537FE7]">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/help"}
                        end
                        className="hover:duration-300 hover:text-[#537FE7]">
                        Help
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/contact-us"}
                        end
                        className="hover:duration-300 hover:text-[#537FE7]">
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
