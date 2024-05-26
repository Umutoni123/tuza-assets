import React from 'react'
import { rentalData } from '../data/rentaData'

export default function About() {
  return (
    <>
      <h1 className="ml-8 text-2xl font-bold text-[#006633]">Pot on bid</h1>

    <div className="p-6 flex gap-4">
    {rentalData.map((rental, index) => (
      <div key={index} className="border-2 border-[#c6c7c6] shadow-md rounded-md">
        <img src={rental.image} alt="house"  className="h-44 rounded-lg w-full"/>
      <div className='bg-orange-700'>
      <div className="flex gap-2 px-3 pt-2 mb-2 ">
        <img src={rental.img} alt="location" className="h-8 w-8 rounded-md" />
        <h3 className="text-[12px] italic pt-2 ">{rental.title}</h3>
        </div> 
        <p className="p-4">{rental.Description}</p>
        <p className="py-3 px-4 font-bold text-center">{rental.viewMore}</p>
      </div>
      </div>
    ))}
  </div>
  </>
  )
}
