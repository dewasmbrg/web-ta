import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <nav className='border-b-2 border-gray-700 flex  items-center'>
            <img
                src={logo}
                alt='logo'
                className='w-[50px] h-[50px] bg-white rounded-full absolute'
            />

            <ul className='w-full flex justify-center gap-10 py-[25px] text-white font-[400] text-lg'>
                <li>
                    <NavLink
                        to={'/'}
                        end
                        className='hover:duration-300 hover:text-[#fcd34d] line-through'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/pokemon'}
                        end
                        className='hover:duration-300 hover:text-[#fcd34d] line-through'>
                        Pokemon
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/help'}
                        end
                        className='hover:duration-300 hover:text-[#fcd34d] line-through'>
                        Help
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
