import Logo from "../assets/logok.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="lg:w-[87%] w-[98%] mx-auto mt-24 md:px-0 px-3">
      

      <div className=" md:gap-0 gap-4 items-center justify-center">
        <h1 className=" text-[2.2rem] text-center font-[Barlow] text-[#000000] font-semibold">
          Disclaimer
        </h1>
        <p className="mt-8 text-xl">
          his is NOT an official website of GEICO, Amica Mutual, Progressive, Farmers, 21st Century, American Family, or any Insurance   Provider but Official Site of insuranceprovidersdeal.com (Marketing Partner). All of the logos used in insuranceprovidersdeal.com are the property of their respective owners and are protected by copyright and trademark laws. All trademarks, logos, and related symbols remain the property of their respective owners and are used by insuranceprovidersdeal.com solely to describe the products and services offered by each respective trademark holder. The use of any third-party trademarks on this site does not indicate any relationship between insuranceprovidersdeal.com and the holders of those trademarks, nor does it imply any endorsement of insuranceprovidersdeal.com by the holders of those trademarks. We may send updates to the mobile number/email id registered with us. The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability.
        </p>
       
      </div>
      <div className="md:mt-[90px] mt-[26px] flex md:flex-row flex-col w-[100%] justify-between">
        <div className="text-start md:w-[240px] w-[100%]">
          <div className="md:w-auto w-[40%]">
            <img src={Logo} alt="" className="md:px-0 mx-auto" />
          </div>
          <p className="text-[1.1rem] font-normal font-[Barlow] text-[#000] mt-5">
            Enhance your Financial management with our Expert billing solutions.
          </p>
        </div>
        <div className="text-start lg:w-[280px] md:w-[270px] w-[100%] md:mt-0 mt-4">
          <p className="text-[1.2rem] font-semibold font-[Barlow] text-[#000000]">
            CONTACT
          </p>
          <a
            href="tel:+18889350858"
            className="flex items-center text-[#000000] text-[1.1rem] font-[Barlow] font-normal gap-[13px] mt-4"
          >
            <FaPhoneAlt color="#FFCB44" size={18} /> +18889350858
          </a>
          <a
            href="mailto:info@insuranceprovidersdeal.online"
            className="flex items-center text-[#000000] text-[1.1rem] font-[Barlow] font-normal gap-[10px] mt-2"
          >
            <MdOutlineEmail color="#FFCB44" size={22} />{" "}
            info@insuranceprovidersdeal.online
          </a>
        </div>
        <div className="text-start lg:w-[380px] md:w-[220px] w-[100%] md:mt-0 mt-5">
          <p className="text-[1.2rem] font-semibold font-[Barlow] text-[#000000]">
            QUICK LINKS
          </p>
          <ul className="pl-5 mt-4 flex flex-col gap-2">
            <li className="list-disc">
              <a
                href="/"
                className="text-[0.9rem] font-normal font-[Barlow]"
              >
                Home
              </a>
            </li>
            <li className="list-disc">
              <a
                href="/about-me"
                className="text-[0.9rem] font-normal font-[Barlow]"
              >
                About Us
              </a>
            </li>
           
            <li className="list-disc">
              <a
                href="/geico"
                className="text-[0.9rem] font-normal font-[Barlow]"
              >
                Geico
              </a>
            </li>
            <li className="list-disc">
              <a
                href="/contact"
                className="text-[0.9rem] font-normal font-[Barlow]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[100%] flex md:flex-row flex-col justify-between items-center mt-12 mb-7">
        <div
          className="text-[0.9rem] font-light font-[Barlow] text-[#000] bg-white lg:pr-[50px] w-[100%] md:w-[40%] md:pr-[20px]"
          style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)" }}
        >
          Copyright 2025 © insuranceprovidersdeal – Operated by Broadband Essentials LLC - All right reserved.
        </div>
        <div className="flex items-center w-[280px] justify-between md:mt-0 mt-2">
          <a
                href="//privacy-policy"
                className="text-[0.9rem] font-normal font-[Barlow]"
              >
                Privacy Policy
              </a>
            <a
                href="/terms"
                className="text-[0.9rem] font-normal font-[Barlow]"
              >
                terms & Condition
              </a>
            <a
                href="/disclaimer"
                className="text-[0.9rem] font-normal font-[Barlow]"
              >
                Disclaimer
              </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
