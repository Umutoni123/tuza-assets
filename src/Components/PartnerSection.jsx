import React from "react";
import ReviewCard from '../Cards/ReviewCard'
import equity from '../Assets/Images/equity.jpeg'
import bk from "../Assets/Images/bk.jpeg";
import radiant from "../Assets/Images/radiant.jpeg";

const PartnerSection = () => {
  return (
    <div className="bg-[#045501] py-3 mb-6">
      <div className="ml-20 px-5">
        <h1 className="text-white font-bold text-2xl pt-4 mb-8">
          What People Say
        </h1>
        <div className="gap-5 whitespace-nowrap overflow-x-auto flex">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        <div className="uppercase text-2xl text-white font-bold py-8">
          Our Partners
        </div>
        <div className="flex gap-4 p-3">
          <img src={radiant} alt="radiant" className="w-24 h-24" />
          <img src={bk} alt="bk" className="w-24 h-24" />
          <img src={equity} alt="equity" className="w-24 h-242" />
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;