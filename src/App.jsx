import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Fix the import
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Homeowner from "./pages/Homeowner";
import Disclaimer from "./pages/Disclaimer";
import Terms from "./pages/Trems";
import StateForm from "./pages/Stateform";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about-me" element={<AboutUs />} />
          <Route path="/geico" element={<Homeowner />} />
          <Route path="/stateform" element={<StateForm />} />
          <Route path="/contact" element={<ContactUs />} />
             <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
