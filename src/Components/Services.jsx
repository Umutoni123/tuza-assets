import React from "react";
import house from "../Assets/Images/house.jpeg";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBuilding, faLock, faMapMarkerAlt } from "@fortawesome/free-regular-svg-icons";

const Services = () => {
  return (
    <div>
      <div className="w-full px-4 bg-[#045501] text-white p-24 ">
        <div className="mb-10 mx-auto max-w-[510px] text-center lg:mb-15">
          <span className="text-primary mb-2 block text-lg font-semibold">
            Get Tuza Asset services
          </span>
          <p className="text-body-color text-base dark:text-dark-6 mb-10">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
          <button className="bg-white text-green-950 border rounded py-1 px-2">
            Get Started
          </button>
        </div>
      </div>
      <div className="md:mb-10 mb-15 py-7">
        <div>
          <div className="mb-10 mx-auto max-w-[510px] text-center lg:mb-15">
            <span className="text-primary mb-2 block text-lg font-semibold">
              What we do
            </span>
            <p className="text-body-color text-base dark:text-dark-6 mb-10">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
        <div className="relative text-white w-[80%] mx-auto">
          <img
            src={house}
            alt="Background of a house with a chimney"
            className="object-cover w-full h-full brightness-50"
          />
          <div className="absolute top-0 left-0 text-white grid md:grid-cols-3 max-w-screen-lg mx-auto gap-10 mt-16 p-5">
            <div className="flex gap-4 items-start flex-col border-l-lime-50 active:bg-green-900 focus:bg-green-900 group">
              <span className="text-orange-600 bg-orange-500/10 p-3 rounded-full">
                {/* <FontAwesomeIcon icon={faBuilding} className="w-5 h-5" /> */}
              </span>
              <div>
                <h3 className="font-semibold text-xl"> Plots and Houses</h3>
                
                <ul className="mt-1 text-gray-300 opacity-0 group-hover:opacity-100">
              <li>Property Biding</li>
              <li>Houses for rent</li>
              <li>Houses for sale</li>
              <li>Property listings</li>
              <li>Design and construction</li>
            </ul>
                
              </div>
            </div>

            <div className="flex  gap-4 items-start flex-col group">
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                {/* <FontAwesomeIcon icon={faLock} className="w-5 h-5" /> */}
              </span>
              <div>
                <h3 className="font-semibold text-xl">Fund and Security</h3>
                <ul className="mt-1 text-gray-300 opacity-0 group-hover:opacity-100">
              <li>Property Biding</li>
              <li>Houses for rent</li>
              <li>Houses for sale</li>
              <li>Property listings</li>
              <li>Design and construction</li>
            </ul>
              </div>
            </div>

            <div className="flex gap-4 items-start flex-col group">
              <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                {/* <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5" /> */}
              </span>
              <div>
                <h3 className="font-semibold text-xl">Real estate in Rwanda </h3>
                <ul className="mt-1 text-gray-300 opacity-0 group-hover:opacity-100">
              <li>Property Biding</li>
              <li>Houses for rent</li>
              <li>Houses for sale</li>
              <li>Property listings</li>
              <li>Design and construction</li>
            </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
