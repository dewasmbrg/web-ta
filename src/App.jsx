import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Help from "./pages/help/Help";
import StrokeForm from "./pages/stroke-form/StrokeForm";
import ContactUs from "./pages/contact-us/ContactUs";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="help" element={<Help />} />
                <Route path="stroke-form" element={<StrokeForm />} />
                <Route path="contact-us" element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
