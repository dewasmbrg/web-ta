import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/header/Navbar";

export default function StrokehtmlForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState(null);
    const [age, setAge] = useState(null);
    const [hypertension, setHypertension] = useState(null);
    const [heartDisease, setHeartDisease] = useState(null);
    const [everMarried, setEverMarried] = useState(null);
    const [workType, setWorkType] = useState(null);
    const [residenceType, setResidenceType] = useState(null);
    const [avgGlucose, setAvgGlucose] = useState(null);
    const [bmi, setBmi] = useState(null);
    const [smokingStatus, setSmokingStatus] = useState(null);
    const [stroke, setStroke] = useState(null);

    function handleSubmit() {
        axios
            .post("/predict", {
                firstName,
                lastName,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="w-full h-screen">
            <div className="max-w-[1000px] mx-auto h-full">
                <Navbar />

                <form
                    action="{{url_htmlFor('predict')}}"
                    method="POST"
                    className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-gray-600 border border-red rounded py-3 px-4 mb-3"
                                id="grid-first-name"
                                type="text"
                                placeholder="John"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label //
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-gray-600 border border-grey-lighter rounded py-3 px-4"
                                id="grid-last-name"
                                type="text"
                                placeholder="Doe"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                htmlFor="age">
                                Age
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-gray-600 border border-grey-lighter rounded py-3 px-4"
                                id="age"
                                type="number"
                                placeholder="..."
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                htmlFor="gender">
                                Gender
                            </label>
                            <div className="relative">
                                <select
                                    className="block w-full bg-grey-lighter border border-grey-lighter text-gray-600 py-3 px-4 pr-8 rounded"
                                    id="gender"
                                    onChange={(e) => setGender(e.target.value)}>
                                    <option selected>...</option>
                                    <option value={1}>Male</option>
                                    <option value={0}>Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                htmlFor="ever_married">
                                Ever Married
                            </label>
                            <div className="relative">
                                <select
                                    className="block w-full bg-grey-lighter border border-grey-lighter text-gray-600 py-3 px-4 pr-8 rounded"
                                    id="ever_married"
                                    onChange={(e) =>
                                        setEverMarried(e.target.value)
                                    }>
                                    <option selected>...</option>
                                    <option value={1}>Yes</option>
                                    <option value={0}>No</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                htmlFor="bmi">
                                BMI
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-gray-600 border border-grey-lighter rounded py-3 px-4"
                                id="bmi"
                                type="number"
                                placeholder="..."
                                onChange={(e) => setBmi(e.target.value)}
                            />
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                htmlFor="work_type">
                                Work Type
                            </label>
                            <div className="relative">
                                <select
                                    className="block w-full bg-grey-lighter border border-grey-lighter text-gray-600 py-3 px-4 pr-8 rounded"
                                    id="work_type"
                                    onChange={(e) =>
                                        setWorkType(e.target.value)
                                    }>
                                    <option selected>...</option>
                                    <option value={0}>Goverment Job</option>
                                    <option value={1}>Never Worked</option>
                                    <option value={2}>Private</option>
                                    <option value={3}>Self-employed</option>
                                    <option value={4}>Children</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                htmlFor="residence_type">
                                Residence Type
                            </label>
                            <div className="relative">
                                <select
                                    className="block w-full bg-grey-lighter border border-grey-lighter text-gray-600 py-3 px-4 pr-8 rounded"
                                    id="residence_type"
                                    onChange={(e) =>
                                        setResidenceType(e.target.value)
                                    }>
                                    <option selected>...</option>
                                    <option value={0}>Rural</option>
                                    <option value={1}>Urban</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                htmlFor="avg_glucose">
                                Average Glucose Level
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-gray-600 border border-grey-lighter rounded py-3 px-4"
                                id="avg_glucose"
                                type="number"
                                placeholder="..."
                                onChange={(e) => setAvgGlucose(e.target.value)}
                            />
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                htmlFor="hypertension">
                                Hypertension
                            </label>
                            <div className="relative">
                                <select
                                    className="block w-full bg-grey-lighter border border-grey-lighter text-gray-600 py-3 px-4 pr-8 rounded"
                                    id="hypertension"
                                    onChange={(e) =>
                                        setHypertension(e.target.value)
                                    }>
                                    <option selected>...</option>
                                    <option value={1}>Yes</option>
                                    <option value={0}>No</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                htmlFor="heart_disease">
                                Heart Disease
                            </label>
                            <div className="relative">
                                <select
                                    className="block w-full bg-grey-lighter border border-grey-lighter text-gray-600 py-3 px-4 pr-8 rounded"
                                    id="heart_disease"
                                    onChange={(e) =>
                                        setHeartDisease(e.target.value)
                                    }>
                                    <option selected>...</option>
                                    <option value={1}>Yes</option>
                                    <option value={0}>No</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                htmlFor="smoking_status">
                                Smoking status
                            </label>
                            <div className="relative">
                                <select
                                    className="block w-full bg-grey-lighter border border-grey-lighter text-gray-600 py-3 px-4 pr-8 rounded"
                                    id="smoking_status"
                                    onChange={(e) =>
                                        setSmokingStatus(e.target.value)
                                    }>
                                    <option selected>...</option>
                                    <option>Smokes</option>
                                    <option>formerly Smoked</option>
                                    <option>Never Smoked</option>
                                    <option>Prefer not to say</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                htmlFor="stroke">
                                Stroke
                            </label>
                            <div className="relative">
                                <select
                                    className="block w-full bg-grey-lighter border border-grey-lighter text-gray-600 py-3 px-4 pr-8 rounded"
                                    id="stroke"
                                    onChange={(e) => setStroke(e.target.value)}>
                                    <option selected>...</option>
                                    <option value={1}>Yes</option>
                                    <option value={0}>No</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <Link
                        type="submit"
                        to={"/result"}
                        className="text-white self-center absolute bottom-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-base px-10 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Submit
                    </Link>
                </form>
            </div>
        </div>
    );
}
