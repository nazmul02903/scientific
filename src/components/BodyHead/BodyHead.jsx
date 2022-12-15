import { BiChevronDown, BiSearchAlt2 } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";

export default function BodyHead() {
  return (
    <div className="flex justify-between py-2 default-container">
      <div className="flex gap-[50px] justify-center items-center">
        <img
          className="w-[189px] h-[47px]"
          src="https://openlibrary.org/static/images/openlibrary-logo-tighter.svg"
          alt=""
        />
        <h3>My Books</h3>
        <div className="flex justify-center items-center">
          <select
            id="underline_select"
            className="block py-2.5 px-0  w-[70px] text-center rounded-sm  bg-transparent border-0 outline-0 border-gray-200 appearance-none "
          >
            <option selected>Browse</option>
            <option value="US">United </option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <span className="ml-[-5px]">
          <BiChevronDown/>
            
          </span>
        </div>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <div className="flex relative bg-gray-300 rounded-sm border border-white">
          <select className="block py-2.5 px-0  w-[50px] text-center border-r rounded-sm text-sm text-gray-500 bg-transparent border-0 outline-0 border-gray-200 appearance-none ">
            <option selected>All</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50  border-0 text-gray-900 text-sm rounded-sm w-[200px] block py-0  px-2.5 outline-none"
          />
          <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
            <BiSearchAlt2 className="h-[42px] w-[22px]" />
          </div>
        </div>
        <h3>Log In</h3>
        <button className="px-2 py-1 text-white bg-blue-500 rounded-md">Sign Up</button>
        <span>
          <RxHamburgerMenu className="w-[42px] h-[22px]" />
        </span>
      </div>
    </div>
  );
}
