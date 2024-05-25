import Person from '../Assets/Person'
import Google from '../Assets/Google'

const ReviewCard = () => {
  return (
    <div className="border border-gray-400 lg:w-1/4 py-5 px-2 w-full mb-4">
      <div className="flex justify-between">
        <div className="flex">
          <Person />
          <div className="flex flex-col">
            <h1 className="font-semibold text-base">Cora Meijer</h1>
            <span className="text-sm">2024-01-12</span>
          </div>
        </div>
        <div>
          <Google />
        </div>
      </div>
      <div className="pt-4 px-4">
        <p className="text-sm text-black font-bold">
          Lorem ipsum dolor sit amet,<br />
           consectetur adipiscing elit. <br /> Sed do eiusmod tempor
          </p>
        <button className="text-orange-600 text-lg font-bold pt-4">
          Read More
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default ReviewCard;