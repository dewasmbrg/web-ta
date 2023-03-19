import Navbar from "./Navbar";
import stroke1 from "../../assets/stroke1.jpg";
import stroke2 from "../../assets/stroke2.jpg";
import stroke3 from "../../assets/stroke3.webp";
import stroke4 from "../../assets/stroke4.png";

const Header = () => {
    return (
        <div className="h-screen w-full border-b-2 border-gray-700">
            <Navbar />

            <div className="flex flex-col justify-center gap-5 text-white py-[50px]">
                <h1 className="text-2xl font-bold text-blue-500">
                    Stroke Prediction
                </h1>
                <p className="font-semibold text-gray-300">
                    <span className="text-xl text-white">
                        Welcome and please check your stroke disease to get
                        safe!
                    </span>
                    <br />
                    <span className="italic">
                        We will calculating your possibility about stroke risk,
                        we are using machine learning technology to guarantee
                        the accuracy
                    </span>
                </p>

                <div className="flex justify-between items-center gap-5">
                    <div className="h-[300px] w-[300px] bg-gray-800 shadow-md shadow-gray-700 rounded-md p-5 flex flex-col justify-center hover:duration-300 hover:shadow-2xl hover:shadow-blue-500 hover:scale-105">
                        <img
                            src={stroke1}
                            alt="stroke_1"
                            className="object-cover object-center self-center w-full h-full rounded-md"
                        />
                    </div>
                    <div className="h-[300px] w-[300px] bg-gray-800 shadow-md shadow-gray-700 rounded-md p-5 flex flex-col justify-center hover:duration-300 hover:shadow-2xl hover:shadow-blue-500 hover:scale-105">
                        <img
                            src={stroke2}
                            alt="stroke_2"
                            className="object-cover object-center self-center w-full h-full rounded-md"
                        />
                    </div>
                    <div className="h-[300px] w-[300px] bg-gray-800 shadow-md shadow-gray-700 rounded-md p-5 flex flex-col justify-center hover:duration-300 hover:shadow-2xl hover:shadow-blue-500 hover:scale-105">
                        <img
                            src={stroke3}
                            alt="stroke_3"
                            className="object-cover object-center self-center w-full h-full rounded-md"
                        />
                    </div>
                    <div className="h-[300px] w-[300px] bg-gray-800 shadow-md shadow-gray-700 rounded-md p-5 flex flex-col justify-center hover:duration-300 hover:shadow-2xl hover:shadow-blue-500 hover:scale-105">
                        <img
                            src={stroke4}
                            alt="stroke_4"
                            className="object-cover object-center self-center w-full h-full rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
