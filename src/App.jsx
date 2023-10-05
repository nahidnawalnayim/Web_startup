import { useState } from "react";

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
import Form from "./components/form";
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
<Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/hero" element={<Hero />} />
          <Route exact path="/services" element={<ServiceDetails />} />
          <Route exact path="/form" element={<Form />} />
    
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
