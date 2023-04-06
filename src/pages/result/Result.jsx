import Navbar from "../../components/header/Navbar";
import Positive from "../../components/result/Positive";
import Negative from "../../components/result/Negative";
import Loading from "../../components/loading/Loading";

export default function Result() {
    return (
        <div className="w-full h-screen">
            <div className="max-w-[1000px] mx-auto h-full">
                <Navbar />
                {/* <Positive /> */}
                {/* <Negative /> */}
                <Loading />
            </div>
        </div>
    );
}
