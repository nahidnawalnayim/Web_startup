"use client"
import React from 'react'
import Navbar from './navbar';
import Service from './service';
import Whyus from './whyus';
import Reviews from './reviews';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ServiceDetails from '../pages/serviceDetails';

const Hero = () => {
  return (
    <div className="hero py-16" id="hero">
    
 
    <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
 
      <div
        className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
      >


        <div
          className="hero-text col-span-6"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h1
            className="font-bold text-4xl md:text-7xl max-w-xl text-slate-800"
            style=
             {{ 'fontFamily': 'Libre Baskerville, serif',
              'boxSizing': 'border-box',
              'lineHeight': '1.2'}}
            
          >
            We help to convert clients idea to Software.
            <div id="typewriter"></div>
          </h1>
          <hr className="w-12 h-1 bg-orange-500 rounded-full mt-8 ml-3" />
          <p
            className="text-gray-800 text-base leading-relaxed mt-8 font-semibold"
          ></p>
          <div
            className="get-app flex space-x-5 mt-6 justify-center md:justify-start"
          >
        
            {/* <button
              className="w-32 rounded-3xl bg-orange-600 hover:bg-[#5409d6] transition delay-75 text-white font-semibold text-base tracking-normal brightness-125 drop-shadow-xl md:w-56 h-16"
              style={{'fontFamily': 'Libre Baskerville, serif'}}
            >
              Learn more
            </button> */}
          </div>
        </div>


        <div
          className="hero-image col-span-6 pattern-dots-md bg-red"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <img
            style={{'transform': 'translate(30px, -30px)'}}
            src="https://res.cloudinary.com/derxrzqhj/image/upload/v1696485454/arhmtybrxhf4ymhurkwt.jpg"
            className="rounded-lg w-80 md:w-full m-4"
          />
        </div>
      </div>
    </div>
  
   
  </div>
  )
}

export default Hero;