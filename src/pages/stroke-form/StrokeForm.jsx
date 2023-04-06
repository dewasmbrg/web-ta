import { Link } from "react-router-dom";
import Navbar from "../../components/header/Navbar";

export default function StrokeForm() {
    return (
        <div className="w-full h-screen">
            <div className="max-w-[1000px] mx-auto h-full">
                <Navbar />

                <div className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                for="grid-first-name">
                                First Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-gray-600 border border-red rounded py-3 px-4 mb-3"
                                id="grid-first-name"
                                type="text"
                                placeholder="Jane"
                            />
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label //
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                for="grid-last-name">
                                Last Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-gray-600 border border-grey-lighter rounded py-3 px-4"
                                id="grid-last-name"
                                type="text"
                                placeholder="Doe"
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                for="grid-city">
                                Age
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-gray-600 border border-grey-lighter rounded py-3 px-4"
                                id="grid-city"
                                type="number"
                                placeholder="..."
                            />
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                for="grid-state">
                                Gender
                            </label>
                            <div className="relative">
                                <select
                                    className="block w-full bg-grey-lighter border border-grey-lighter text-gray-600 py-3 px-4 pr-8 rounded"
                                    id="grid-state">
                                    <option selected>...</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                for="grid-state">
                                Ever Married
                            </label>
                            <div className="relative">
                                <select
                                    className="block w-full bg-grey-lighter border border-grey-lighter text-gray-600 py-3 px-4 pr-8 rounded"
                                    id="grid-state">
                                    <option selected>...</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                for="grid-city">
                                BMI
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-gray-600 border border-grey-lighter rounded py-3 px-4"
                                id="grid-city"
                                type="number"
                                placeholder="..."
                            />
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                for="grid-state">
                                Work Type
                            </label>
                            <div className="relative">
                                <select
                                    className="block w-full bg-grey-lighter border border-grey-lighter text-gray-600 py-3 px-4 pr-8 rounded"
                                    id="grid-state">
                                    <option selected>...</option>
                                    <option>Children</option>
                                    <option>Goverment Job</option>
                                    <option>Never Worked</option>
                                    <option>Private</option>
                                    <option>Self-employed</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                for="grid-state">
                                Residence Type
                            </label>
                            <div className="relative">
                                <select
                                    className="block w-full bg-grey-lighter border border-grey-lighter text-gray-600 py-3 px-4 pr-8 rounded"
                                    id="grid-state">
                                    <option selected>...</option>
                                    <option>Rural</option>
                                    <option>Urban</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                for="grid-city">
                                Average Glucose Level
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-gray-600 border border-grey-lighter rounded py-3 px-4"
                                id="grid-city"
                                type="number"
                                placeholder="..."
                            />
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                for="grid-state">
                                Hypertension
                            </label>
                            <div className="relative">
                                <select
                                    className="block w-full bg-grey-lighter border border-grey-lighter text-gray-600 py-3 px-4 pr-8 rounded"
                                    id="grid-state">
                                    <option selected>...</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                for="grid-state">
                                Heart Disease
                            </label>
                            <div className="relative">
                                <select
                                    className="block w-full bg-grey-lighter border border-grey-lighter text-gray-600 py-3 px-4 pr-8 rounded"
                                    id="grid-state">
                                    <option selected>...</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                for="grid-state">
                                Smoking status
                            </label>
                            <div className="relative">
                                <select
                                    className="block w-full bg-grey-lighter border border-grey-lighter text-gray-600 py-3 px-4 pr-8 rounded"
                                    id="grid-state">
                                    <option selected>...</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                                for="grid-state">
                                Stroke
                            </label>
                            <div className="relative">
                                <select
                                    className="block w-full bg-grey-lighter border border-grey-lighter text-gray-600 py-3 px-4 pr-8 rounded"
                                    id="grid-state">
                                    <option selected>...</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <Link
                        to={"/result"}
                        class="text-white self-center absolute bottom-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-base px-10 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Submit
                    </Link>
                </div>
            </div>
        </div>
    );
}
