import React, { useState } from "react";
import { Link } from "react-router-dom";
import house from "../Assets/Images/house.jpeg";
import LockCard from "../Cards/LockCard";
import Language from "./Language";
import logo from "../Assets/Images/Rectangle 2.jpg";

export default function NavBar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="relative h-screen text-white">
      <img src={house} alt="Background of a house with a chimney" className="object-cover w-full h-full brightness-50" />

      <div className="absolute top-4 left-4 right-4 md:top-8 flex justify-between items-center font-bold">
        <div>
          <img src={logo} alt="" className="px-4"/>
        </div>
        
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2.5 5A.5.5 0 013 5h14a.5.5 0 110 1H3a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h14a.5.5 0 110 1H3a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h14a.5.5 0 110 1H3a.5.5 0 01-.5-.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        
        <nav className={` container flex-col lg:flex-row flex gap-4 lg:gap-8 uppercase ${showNavbar ? 'flex' : 'hidden'} lg:flex`}>
          <Link to="/" onClick={() => setShowNavbar(false)}>Home</Link>
          <Link to="About" onClick={() => setShowNavbar(false)}>About us</Link>
          <Link to="Services" onClick={() => setShowNavbar(false)}>Services</Link>
          <Link to="Property" onClick={() => setShowNavbar(false)}>Property Managment</Link>
          <Link to="Investors" onClick={() => setShowNavbar(false)}>Investors</Link>
          <Link to="Buy" onClick={() => setShowNavbar(false)}>Buy Plot</Link>
        </nav>
       
        <div>
          <Language />
        </div>
      </div>

      <div className="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="container text-4xl md:text-6xl font-bold py-8">Tuza Assets ltd</h1>
        <h2 className="container text-2xl bold lg:text-[34px]">
          Property Managment for Rwandan Diaspora and <br /> for the Diplomates
          in Rwanda
        </h2>
        <div className="container">
          <LockCard/>
        </div>
        
      </div>
    </div>
  );
}
