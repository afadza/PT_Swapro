import { CiCalendarDate } from "react-icons/ci";

function Checking() {
  return (
    <div>
      <div className="bg-white w-full hidden md:flex justify-between py-4  pr-10 z-50 rounded-sm shadow-lg items-center">
        <div className="w-full border-r-2 text-center">Rooms</div>
        <div className="w-full border-r-2 text-center flex gap-2 items-center justify-center">
          <CiCalendarDate className="text-emerald-700" />
          <p>Check in</p>
        </div>
        <div className="w-full text-center flex gap-2 items-center justify-center">
          <CiCalendarDate className="text-emerald-700" />
          <p>Check out</p>
        </div>
        <div className="w-full bg-emerald-700 py-2 rounded-sm text-white text-center">
          Check availability
        </div>
      </div>
      <div className="bg-white w-full md:hidden py-4  px-5 z-50 shadow-lg items-center">
        <div className="w-full border-b-2">Rooms</div>
        <div className="w-full flex justify-between my-2">
          <div className="w-full border-r-2 text-center flex gap-2 items-center justify-center">
            <CiCalendarDate className="text-emerald-700" />
            <p>Check in</p>
          </div>
          <div className="w-full text-center flex gap-2 items-center justify-center">
            <CiCalendarDate className="text-emerald-700" />
            <p>Check out</p>
          </div>
        </div>
        <div className="w-full bg-emerald-700 py-2 rounded-sm text-white text-center">
          Check availability
        </div>
      </div>
    </div>
  );
}

export default Checking;
