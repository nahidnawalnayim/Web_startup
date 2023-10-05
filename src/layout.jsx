import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './components/navbar';

import Hero from './components/hero'
import Service from './components/service'
import Whyus from './components/whyus'
import Reviews from './components/reviews'
import Form from './components/form';
import Chat from './components/chat';
const Layout = () => {
  return (
    <div>
      
        <Navbar />
        <Hero /> 
       <Service />
      <Whyus />
      <Reviews />
     <Chat />
        <Outlet />
    </div>
  )
}

export default Layout