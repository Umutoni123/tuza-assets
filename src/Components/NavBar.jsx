import React from "react";
import { Link } from "react-router-dom";
import house from "../Assets/Images/house.jpeg";
import LockCard from "../Cards/LockCard";
//import Logo from "../Assets/Logo";
import Language from "./Language";
import logo from "../Assets/Images/Rectangle 2.jpg";

export default function NavBar() {

  return (
    <div className="relative h-screen text-white">
      <img src={house} alt="Background of a house with a chimney" className="object-cover w-full h-full brightness-50" />

      <div className="absolute top-4 md:top-8 flex justify-between items-center md:flex-row md:gap-6 font-bold">
        <div>
          {/* <Logo/> */}
          <img src={logo} alt="" />
        </div>
        <div className="flex gap-8">
        <Link to="/">Home</Link>
        <Link to="About">About us</Link>
        <Link to="Services">Services</Link>
        <Link to="Property">Property Managment</Link>
        <Link to="Investors">Investors</Link>
        <Link to="Buy">Buy Plot</Link>
        </div>
       
        <div>
          <Language />
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-5">Tuza assets ltd</h1>
        <h2 className="text-6xl bold md:text-2xl">
          Propety Managment for Rwandan Diaspora and <br /> for the Diplomates
          in Rwanda
        </h2>
        <LockCard/>
      </div>
    </div>
  );
}
