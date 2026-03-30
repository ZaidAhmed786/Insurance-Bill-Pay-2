import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="w-[100%] mt-8">
      <div className="w-[100%] lg:h-[460px] md:h-[400px] h-[350px]">
        <div className="w-[100%] lg:h-[322px] md:h-[262px] h-[212px] bg-[#FFF9F5] absolute z-[-1]"></div>
        <div
          className="w-[100%] lg:h-[345px] md:h-[285px] h-[235px] relative top-28 flex items-center justify-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #E2F9EA 70%, #FFFFFF00 0%)",
          }}
        >
          <p
            className="lg:text-[90px] md:text-[60px] text-[40px] font-bold text-[#2A5238] pr-[30px] lg:mt-12 md:mt-5 mt-0"
            style={{ fontFamily: "Playfair Display" }}
          >
            Contact Us
          </p>
        </div>
      </div>
      <div className="lg:w-[87%] w-[98%] mx-auto text-start">
        <div className="w-[100%] flex md:flex-row flex-col justify-between md:mt-44 md:mb-44 mt-28 mb-20 md:gap-0 gap-10">
          <div className="flex md:flex-row flex-col md:items-center items-start w-[48%]">
            <IoMdMail color="#2A5238" size={56} />
            <div className="md:ml-6 ml-0 md:mt-0 mt-4">
              <p
                className="text-[30px] font-bold text-[#2A5238]"
                style={{ fontFamily: "Playfair Display" }}
              >
                Email Address
              </p>
              <p
                className="text-[20px] font-normal mt-3 text-[#737373]"
                style={{ fontFamily: "Open Sans" }}
              >
                info@insuranceprovidersdeal.online
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:items-center items-start w-[48%]">
            <FaPhoneAlt color="#2A5238" size={56} />
            <div className="md:ml-6 ml-0 md:mt-0 mt-4">
              <p
                className="text-[30px] font-bold text-[#2A5238]"
                style={{ fontFamily: "Playfair Display" }}
              >
                Phone
              </p>
              <p
                className="text-[20px] font-normal mt-3 text-[#737373]"
                style={{ fontFamily: "Open Sans" }}
              >
                +18889350858
              </p>
            </div>
          </div>
        </div>
        <p
          className="text-[50px] font-bold text-[#2A5238]"
          style={{ fontFamily: "Playfair Display" }}
        >
          Have Questions? Get In Touch!
        </p>
        <form className="w-[100%] flex flex-wrap gap-4 mt-20">
          <input
            type="text"
            placeholder="First Name"
            required
            className="w-[99%] md:w-[48.5%] bg-[#F4FFF8] border border-[#D5EBDD] rounded-[10px] py-[40px] pl-[50px] pr-[50px] font-[Inter] text-[25px] font-normal"
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            className="w-[99%] md:w-[48.5%] bg-[#F4FFF8] border border-[#D5EBDD] rounded-[10px] py-[40px] pl-[50px] pr-[50px] font-[Inter] text-[25px] font-normal"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-[99%] bg-[#F4FFF8] border border-[#D5EBDD] rounded-[10px] py-[40px] pl-[50px] pr-[50px] font-[Inter] text-[25px] font-normal"
          />
          <input
            type="text"
            placeholder="Subject"
            required
            className="w-[99%] bg-[#F4FFF8] border border-[#D5EBDD] rounded-[10px] py-[40px] pl-[50px] pr-[50px] font-[Inter] text-[25px] font-normal"
          />
          <textarea
            name=""
            id=""
            placeholder="Your Message"
            required
            className="w-[99%] bg-[#F4FFF8] border border-[#D5EBDD] rounded-[10px] py-[40px] pl-[50px] pr-[50px] font-[Inter] text-[25px] font-normal h-[360px]"
          ></textarea>
          <button
            type="submit"
            className="w-[99%] bg-[#0E9B47] hover:bg-gray-500 text-[#fff] rounded-[10px] py-[45px] px-[20px] mt-[50px] text-[20px] font-bold cursor-pointer"
            style={{ fontFamily: "Playfair Display" }}
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
