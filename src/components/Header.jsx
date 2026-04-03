import { useState } from "react";
import Logo from "../assets/logok.png";
import { FaPhoneAlt } from "react-icons/fa";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };


  return (
    <div className="flex lg:flex-row flex-col lg:w-[88%] w-[98%] mx-auto mt-[4px] md:mt-[17px] mb-[22px] lg:mt-[36px]">
      <div className=" flex items-center lg:hidden mx-auto mt-5 w-[150px]">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex items-center justify-between w-[100%] mx-auto lg:mt-0 mt-8 sm:mt-10">
        <div className="flex md:flex  lg:flex-row flex-col lg:w-auto w-[45%] lg:items-start items-center">
          <div className="w-[100%] lg:w-[170px] lg:mb-0 mb-2 lg:h-[70px] flex justify-start  items-center lg:mr-[66px] ">
            <img src={Logo} alt="Logo" className="lg:flex hidden" />
            {showLinks ? (
              <div
                className="lg:hidden block px-[6px] py-1 bg-gray-400"
                onClick={() => setShowLinks(false)}
              >
                <RxCross2 size={28} />
              </div>
            ) : (
              <div
                className="lg:hidden block px-[6px] py-1 bg-gray-400"
                onClick={() => setShowLinks(true)}
              >
                <RxHamburgerMenu size={28} />
              </div>
            )}
          </div>
          <div
            className={`lg:flex lg:flex-row flex-col lg:h-[50px] h-auto lg:w-auto w-[100%] ${
              showLinks ? "flex" : "hidden"
            }`}
          >
            <a
              href="/"
              className="py-[11px] px-[20px] text-[15px] font-[Roboto] lg:text-center text-start font-bold lg:text-[#61CE70] text-[#fff] lg:bg-transparent bg-[#3F444B] lg:hover:text-[] lg:border-b-[3px] lg:border-b-[#61CE70]"
            >
              Home
            </a>
         
           
            <a
              href="/about-me"
              className="py-[11px] px-[20px] text-[15px] font-[Roboto] lg:text-center text-start font-bold lg:hover:text-[#61CE70] hover:text-[#fff] lg:bg-transparent focus::bg-[#3F444B] hover:border-b-[3px] hover:border-b-[#61CE70] text-gray-500"
            >
              About us
            </a>
            <a
              href="/contact"
              className="py-[11px] px-[20px] text-[15px] font-[Roboto] lg:text-center text-start font-bold lg:hover:text-[#61CE70] hover:text-[#fff] lg:bg-transparent focus::bg-[#3F444B] hover:border-b-[3px] hover:border-b-[#61CE70] text-gray-500"
            >
              Contact us
            </a>
         {/* Provider Dropdown */}
      {/* <div className="relative group lg:hover:block">
        <div
          onClick={() => toggleDropdown("provider")}
          className="py-[11px] px-[20px] text-[15px] font-[Roboto] text-start font-bold lg:hover:text-[#61CE70] hover:text-[#fff] lg:bg-transparent focus:bg-[#3F444B] hover:border-b-[3px] hover:border-b-[#61CE70] text-gray-500 cursor-pointer"
        >
          Provider
        </div>
        <div
          className={`absolute mt-1 w-40 z-10 bg-white shadow-md ${
            openDropdown === "provider" ? "block" : "hidden"
          } lg:group-hover:block`}
        >
          <ul className="text-black text-sm font-medium text-start">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a
                href="/geico"
                className="text-gray-700 hover:text-[#61CE70] block"
              >
                Geico
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a
                href="/stateform"
                className="text-gray-700 hover:text-[#61CE70] block"
              >
                StateForm
              </a>
            </li>
          </ul>
        </div>
      </div> */}

      {/* Policies Dropdown */}
      {/* <div className="relative group lg:hover:block">
        <div
          onClick={() => toggleDropdown("policies")}
          className="py-[11px] px-[20px] text-[15px] font-[Roboto] text-start font-bold lg:hover:text-[#61CE70] hover:text-[#fff] lg:bg-transparent focus:bg-[#3F444B] hover:border-b-[3px] hover:border-b-[#61CE70] text-gray-500 cursor-pointer"
        >
          Policies
        </div>
        <div
          className={`absolute mt-1 w-40 z-10 bg-white shadow-md ${
            openDropdown === "policies" ? "block" : "hidden"
          } lg:group-hover:block`}
        >
          <ul className="text-black text-sm font-medium text-start">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a
                href="/privacy-policy"
                className="text-gray-700 hover:text-[#61CE70] block"
              >
                Privacy Policy
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a
                href="/disclaimer"
                className="text-gray-700 hover:text-[#61CE70] block"
              >
                Disclaimer
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a
                href="/terms"
                className="text-gray-700 hover:text-[#61CE70] block"
              >
                Terms & Condition
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    

          </div>
        </div>
        <a
          href="tel:+18889350858"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #FFFFFF00 0%, #F29F29 100%)",
          }}
          className="flex items-center gap-1.5 text-[17px] border-[1px] font-[Roboto] bg-transparent text-[#000000] sm:py-[25px] sm:px-[50px] py-[10px] px-[20px] border-[#E2E2E2] rounded-[6px]text-center"
        >
          <FaPhoneAlt size={18} />
          +18889350858
        </a>
      </div>
    </div>
  );
};

export default Header;
