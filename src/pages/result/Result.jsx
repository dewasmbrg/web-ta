import { output } from "../../data/output";
import { useState, useEffect } from "react";
import Navbar from "../../components/header/Navbar";
import Positive from "../../components/result/Positive";
import Negative from "../../components/result/Negative";
import Loading from "../../components/loading/Loading";
import axios from "axios";

export default function Result() {
    const [otput, setOutput] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        axios
            .get("/predict")
            .then((res) => {
                setOutput(res.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    function greet() {
        setShow(true);
    }

    setTimeout(greet, 3000);

    return (
        <div className="w-full h-screen">
            <div className="max-w-[1000px] mx-auto h-full">
                <Navbar />
                {!show && <Loading />}
                {output != 1 && show ? <Negative /> : ""}
                {output == 1 && !show ? "" : <Positive />}
            </div>
        </div>
    );
}
