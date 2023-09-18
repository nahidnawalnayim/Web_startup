import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Service from "./components/service";
import Whyus from "./components/whyus";
import Reviews from "./components/reviews";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ServiceDetails from "./pages/serviceDetails";
import Try from "./try";
import Layout from "./layout";
import Footer from "./components/footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <Navbar /> */}
        {/* <Hero /> 
       <Service />
      <Whyus />
      <Reviews />  */}

        <Routes>
          <Route path="/" element={<Layout />} />
          <Route exact path="/services" element={<ServiceDetails />} />
    
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
