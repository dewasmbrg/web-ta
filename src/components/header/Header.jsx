import Navbar from './Navbar';
import pikachu from '../../assets/pikachu.png';
import mewtwo from '../../assets/mewtwo.webp';
import garchomp from '../../assets/garchomp.png';
import blastoise from '../../assets/blastoise.png';

const Header = () => {
    return (
        <div className='h-screen w-full border-b-2 border-gray-700'>
            <Navbar />

            <div className='flex flex-col justify-center gap-5 text-white py-[50px]'>
                <h1 className='text-xl font-bold text-red-500'>
                    What is Pokemon?
                </h1>
                <p className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit, doloribus sequi nam beatae enim voluptatum, aut
                    cupiditate ipsam quae illo libero exercitationem fugit
                    adipisci blanditiis. Praesentium vel distinctio eos magnam?
                </p>

                <div className='flex justify-between items-center gap-5'>
                    <div className='h-[300px] w-[300px] bg-gray-800 shadow-md shadow-gray-700 rounded-md p-5 flex flex-col justify-center hover:duration-300 hover:shadow-2xl hover:shadow-gray-700 hover:scale-105'>
                        <img
                            src={pikachu}
                            alt='pokemon_img'
                            className='object-cover object-center'
                        />
                    </div>
                    <div className='h-[300px] w-[300px] bg-gray-800 shadow-md shadow-gray-700 rounded-md p-5 flex flex-col justify-center hover:duration-300 hover:shadow-2xl hover:shadow-gray-700 hover:scale-105'>
                        <img
                            src={mewtwo}
                            alt='pokemon_img'
                            className='object-cover object-center'
                        />
                    </div>
                    <div className='h-[300px] w-[300px] bg-gray-800 shadow-md shadow-gray-700 rounded-md p-5 flex flex-col justify-center hover:duration-300 hover:shadow-2xl hover:shadow-gray-700 hover:scale-105'>
                        <img
                            src={blastoise}
                            alt='pokemon_img'
                            className='object-cover object-center'
                        />
                    </div>
                    <div className='h-[300px] w-[300px] bg-gray-800 shadow-md shadow-gray-700 rounded-md p-5 flex flex-col justify-center hover:duration-300 hover:shadow-2xl hover:shadow-gray-700 hover:scale-105'>
                        <img
                            src={garchomp}
                            alt='pokemon_img'
                            className='object-cover object-center'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
