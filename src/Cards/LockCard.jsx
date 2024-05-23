import Lock from "../Assets/Lock";
const LockCard = () => {
  return (
    <div className="flex gap-24 mt-10">
    <div className="border-4 border-orange-400 w-40 h-40 flex flex-col items-center justify-center text-orange-400 text-center">
      <Lock />
      <h1 className="mt-4">For Rwandan Diaspora</h1>
    </div>
    <div className="border-4 border-orange-400 w-40 h-40 flex flex-col items-center justify-center text-orange-400 text-center">
      <Lock />
      <h1 className="mt-4">For Rwandan Diaspora</h1>
    </div>
    <div className="border-4 border-orange-400 w-40 h-40 flex flex-col items-center justify-center text-orange-400 text-center">
    <Lock />
    <h1 className="mt-4">For Rwandan Diaspora</h1>
  </div>
    </div>
  );
};

export default LockCard;