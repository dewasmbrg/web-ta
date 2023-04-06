import { FaMagic } from "react-icons/fa";

export default function Loading() {
    return (
        <div className="max-w-7xl mx-auto mt-[10%]">
            <div className="relative group">
                <div className="absolute -inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-100"></div>
                <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                    <div className="space-y-4 w-full flex flex-col items-center">
                        <img
                            className="h-16 w-16"
                            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
                            alt=""
                        />
                        <span className="text-black">
                            Calculating the possibility
                        </span>
                        <FaMagic className="text-black h-8 w-8" />
                    </div>
                </div>
            </div>
        </div>
    );
}
