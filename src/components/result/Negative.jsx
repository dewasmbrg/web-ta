import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Negative() {
    return (
        <div className="max-w-7xl mx-auto mt-[10%]">
            <div className="relative group">
                <div className="absolute -inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-100"></div>
                <div className="relative px-7 py-8 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                    <div className="space-y-4 w-full flex flex-col items-center">
                        <AiFillCloseCircle className="text-red-600 w-16 h-16" />
                        <p className="text-slate-800">
                            You are likely to have a stroke!
                        </p>
                        <Link
                            to={"/"}
                            href="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background"
                            className="block text-purple-800 hover:text-indigo-400 transition duration-200">
                            Back →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
