import Navbar from "../../components/header/Navbar";
import stroke1 from "../../assets/stroke1.jpg";
import stroke2 from "../../assets/stroke2.jpg";
import stroke3 from "../../assets/stroke3.webp";
import stroke4 from "../../assets/stroke4.png";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="w-full h-screen">
            <div className="max-w-[1000px] mx-auto h-full">
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
                            We will calculating your possibility about stroke
                            risk, we are using machine learning technology to
                            guarantee the accuracy
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

                    <div className="flex flex-col gap-5 justify-center items-center mt-[5%]">
                        <Link
                            to={"/stroke-form"}
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-base px-10 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Check
                        </Link>
                        <div className="flex gap-5 justify-center items-center">
                            <HiMail className="w-10 h-10" />
                            <span>
                                If you have a question, you can contact our{" "}
                                <a
                                    href="mailto:dewasembiring1@gmail.com"
                                    className="text-blue-500 underline">
                                    email
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
