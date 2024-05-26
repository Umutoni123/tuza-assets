import { rentalData } from "../data/rentaData"
const RentalCard = () => {

  return (      
    <div className="p-6 flex gap-4">
      {rentalData.map((rental, index) => (
        <div key={index} className="border-2 border-[#006633] shadow-md rounded-md">
          <img src={rental.image} alt="house"  className="h-44 rounded-lg w-full"/>
         <div className="flex gap-2 px-3 pt-2 mb-2 ">
          <img src={rental.img} alt="location" className="h-10 w-10 rounded-full" />
          <h3 className="text-[12px] italic pt-2 ">{rental.title}</h3>
          </div> 
          <p className="p-4">{rental.Description}</p>
          <button className="py-3 px-4 font-bold text-base">{rental.viewMore}</button>
        </div>
      ))}
    </div>
  
  )
}

export default RentalCard