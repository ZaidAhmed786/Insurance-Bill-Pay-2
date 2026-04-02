import HeroImage from "../assets/heroImage.png";
import Insurance from "../assets/life-insurance.png";
import Clipboard from "../assets/clipboard.png";
import Hygiene from "../assets/hygiene.png";
import Shield from "../assets/shield.png";
import Insurance2 from "../assets/insurance.png";
import Amica from "../assets/amica.png";
import Geico from "../assets/geico.jpeg";
import Farmers from "../assets/farmers.png";
import Progressive from "../assets/progressive.jpeg";
import MainImage from "../assets/aboutImage.png";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center lg:h-[510px] h-auto w-[100%] bg-black md:px-0 px-3">
        <div className="flex lg:w-[84%] w-[98%] h-[100%] justify-between lg:items-start items-center lg:flex-row flex-col">
          <div className="flex flex-col lg:w-[580px] w-[98%] lg:h-[66%] h-auto lg:mt-auto ms:mt-40 mt-24">
            <p className="text-[38px] font-[Roboto] leading-[40px] text-[#fff] font-semibold text-start">
              Protect What Matters Most — Without Overpaying
            </p>
            <strong className="text-[#fff] text-start mt-[18px]">
              Independent insurance experts helping you find the best coverage at the best price. No pressure. No hidden fees.
            </strong>
            <div className=" flex flex-col md:flex-row md:justify-start justify-center items-center mt-[36px] gap-3">
  <a
    href="tel:+18889350858"
    className="text-[15px] py-[12px] px-[24px] text-[#fff] text-center bg-[#FA9C16] rounded-[5px] w-75 font-semibold"
  >
   Call Now Get a Free Quote
  </a>

  
</div>
          </div>
          <div>
            <img src={HeroImage} alt="" />
          </div>
        </div>
      </div>
         <div  className="md:px-0 px-3">

      <div className="w-[100%] md:mb-16">
              <div className="absolute z-[-1] w-[100%] mt-56 lg:mt-96 md:block hidden">
                <div className="lg:w-[43.5%] w-[42%] h-[321px] lg:h-[621px] bg-[#e2f9ea] ml-auto"></div>
              </div>
              <div className="flex md:flex-row flex-col lg:w-[87%] w-[98%] mx-auto justify-between mt-16 lg:mt-60">
                <div className="text-start lg:w-[580px] md:w-[440px] w-[100%]">
                  <p
                    className="lg:text-[60px] text-[36px] font-bold text-[#2A5238]"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    Who We Are
                  </p>
                  <p
                    className="lg:text-[24px] text-[16px] font-normal text-[#69796F] lg:mt-9 mt-3 leading-[2em]"
                    style={{ fontFamily: "Open Sans" }}
                  >
                    We are an independent insurance agency dedicated to helping individuals, families, and businesses across the United States find the right coverage without the confusion.
                  </p>
                  <p
                    className="lg:text-[24px] text-[16px] font-normal text-[#69796F] mt-6 leading-[2em]"
                    style={{ fontFamily: "Open Sans" }}
                  >
                    Unlike large corporations, we work for you — not the insurance companies. That means we compare multiple carriers to get you the best rates and coverage options tailored to your needs.
                  </p>
                </div>
                <div className="md:w-[42.8%] w-[70%] lg:h-[500px] md:h-[360px]   md:mt-0 mt-12 md:mx-0 mx-auto">
                  <div className="h-[100%] md:w-auto w-[100%]">
                    <img src={MainImage} alt="" className="w-[100%] h-[100%]" />
                  </div>
                </div>
              </div>
            </div>

   

      <div>
        <p className="text-[14px] font-[Poppins] font-semibold text-[#000000] mt-2">
          YOUR TRUSTED PARTNER
        </p>
        <p className="lg:text-[43px] sm:text-[40px] text-[35px] font-[Roboto] font-bold text-[#000000] mt-3 text-center lg:leading-[50px] leading-[40px]">
          Choose us for Efficient, Secure, And Seamless solutions.
        </p>
      </div>
      <div className="xl:w-[1150px] md:w-[95%] w-[96%] mx-auto flex flex-wrap gap-6 md:mt-7 mt-8">
  <div className="md:w-[48%] w-[100%] flex flex-col items-start text-start md:py-[50px] md:px-[40px] py-[40px] px-[30px] rounded-[8px] bg-[#F9F9FB] hover:shadow-2xl hover:bg-[#fff] transition-all duration-300 ease-in-out">
    <div className="w-[83px] h-[83px]">
      <img src={Insurance} alt="" />
    </div>
    <p className="text-[32px] font-semibold text-[#000000] font-[Barlow] my-[15px]">
      GEICO INSURANCE
    </p>
    <p className="text-[18px] font-[Poppins] text-[#000000]">
      Get in touch with our support team for quick and reliable assistance.
    </p>
    <ul className="list-disc pl-5 text-start w-[92%] flex flex-col gap-[16px] my-[20px]">
      <li className="leading-[25px]">
        <strong className="text-[#000000] text-[19px] font-[Poppins]">
          Friendly and responsive customer support
        </strong>
      </li>
      <li className="leading-[25px]">
        <strong className="text-[#000000] text-[19px] font-[Poppins]">
         Help with policy updates and general enquiries
        </strong>
      </li>
      <li className="leading-[25px]">
        <strong className="text-[#000000] text-[19px] font-[Poppins]">
          Fast and simple assistance whenever you need it
        </strong>
      </li>
    </ul>
    
  </div>

  <div className="md:w-[48%] w-[100%] flex flex-col items-start text-start md:py-[50px] md:px-[40px] py-[40px] px-[30px] rounded-[8px] bg-[#F9F9FB] hover:shadow-2xl hover:bg-[#fff] transition-all duration-300 ease-in-out">
    <div className="w-[83px] h-[83px]">
      <img src={Clipboard} alt="" />
    </div>
    <p className="text-[32px] font-semibold text-[#000000] font-[Barlow] my-[15px]">
      State Farm Insurance
    </p>
    <p className="text-[18px] font-[Poppins] text-[#000000]">
      We’re here to help you manage your services with ease and confidence.
    </p>
    <ul className="list-disc pl-5 text-start w-[92%] flex flex-col gap-[16px] my-[20px]">
      <li className="leading-[25px]">
        <strong className="text-[#000000] text-[19px] font-[Poppins]">
          Dedicated customer support team
        </strong>
      </li>
      <li className="leading-[25px]">
        <strong className="text-[#000000] text-[19px] font-[Poppins]">
          Quick help with account and policy questions
        </strong>
      </li>
      <li className="leading-[25px]">
        <strong className="text-[#000000] text-[19px] font-[Poppins]">
          Hassle-free service experience
        </strong>
      </li>
    </ul>
    
  </div>

  <div className="md:w-[48%] w-[100%] flex flex-col items-start text-start md:py-[50px] md:px-[40px] py-[40px] px-[30px] rounded-[8px] bg-[#F9F9FB] hover:shadow-2xl hover:bg-[#fff] transition-all duration-300 ease-in-out">
    <div className="w-[83px] h-[83px]">
      <img src={Hygiene} alt="" />
    </div>
    <p className="text-[32px] font-semibold text-[#000000] font-[Barlow] my-[15px]">
      PROGRESSIVE INSURANCE
    </p>
    <p className="text-[18px] font-[Poppins] text-[#000000]">
      Connect with our team for efficient support and guidance tailored to your insurance needs.
    </p>
    <ul className="list-disc pl-5 text-start w-[92%] flex flex-col gap-[16px] my-[20px]">
      <li className="leading-[25px]">
        <strong className="text-[#000000] text-[19px] font-[Poppins]">
          Reliable assistance from experienced agents
        </strong>
      </li>
      <li className="leading-[25px]">
        <strong className="text-[#000000] text-[19px] font-[Poppins]">
         Clear and straightforward support
        </strong>
      </li>
      <li className="leading-[25px]">
        <strong className="text-[#000000] text-[19px] font-[Poppins]">
          Designed to make your experience simple
        </strong>
      </li>
    </ul>
    
  </div>

  <div className="md:w-[48%] w-[100%] flex flex-col items-start text-start md:py-[50px] md:px-[40px] py-[40px] px-[30px] rounded-[8px] bg-[#F9F9FB] hover:shadow-2xl hover:bg-[#fff] transition-all duration-300 ease-in-out">
    <div className="w-[83px] h-[83px]">
      <img src={Shield} alt="" />
    </div>
    <p className="text-[32px] font-semibold text-[#000000] font-[Barlow] my-[15px]">
      Farmers Insurance
    </p>
    <p className="text-[18px] font-[Poppins] text-[#000000]">
      Speak with our team today and discover how we can support your insurance needs.
    </p>
    <ul className="list-disc pl-5 text-start w-[92%] flex flex-col gap-[16px] my-[20px]">
      <li className="leading-[25px]">
        <strong className="text-[#000000] text-[19px] font-[Poppins]">
          Expert guidance and assistance
        </strong>
      </li>
      <li className="leading-[25px]">
        <strong className="text-[#000000] text-[19px] font-[Poppins]">
          Quick responses to your enquiries
        </strong>
      </li>
      <li className="leading-[25px]">
        <strong className="text-[#000000] text-[19px] font-[Poppins]">
          Simple and smooth customer experience
        </strong>
      </li>
    </ul>
    
  </div>

  <div className="md:w-[48%] w-[100%] flex flex-col items-start text-start md:py-[50px] md:px-[40px] py-[40px] px-[30px] rounded-[8px] bg-[#F9F9FB] hover:shadow-2xl hover:bg-[#fff] transition-all duration-300 ease-in-out">
    <div className="w-[83px] h-[83px]">
      <img src={Insurance2} alt="" />
    </div>
    <p className="text-[32px] font-semibold text-[#000000] font-[Barlow] my-[15px]">
      21st CENTURY INSURANCE
    </p>
    <p className="text-[18px] font-[Poppins] text-[#000000]">
      Reach our billing department to complete your 21st Century Insurance payment today.
    </p>
    <ul className="list-disc pl-5 text-start w-[92%] flex flex-col gap-[16px] my-[20px]">
      <li className="leading-[25px]">
        <strong className="text-[#000000] text-[19px] font-[Poppins]">
          Pay your bill and enjoy available discounts
        </strong>
      </li>
      <li className="leading-[25px]">
        <strong className="text-[#000000] text-[19px] font-[Poppins]">
          No additional cost for phone payments
        </strong>
      </li>
      <li className="leading-[25px]">
        <strong className="text-[#000000] text-[19px] font-[Poppins]">
          Quick automated system for easy payments
        </strong>
      </li>
    </ul>
    
  </div>
</div>
      <div className="mt-8 lg:w-[87%] w-[98%] mx-auto">
        <div className="w-[100%] flex justify-center border border-b-0 border-gray-300 py-3">
          <p className="text-[24px] font-bold">
            Top Insurance Providers in the USA
          </p>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-center">
            <tbody>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  GEICO
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Auto Insurance
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Homeowners Insurance
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Renters Insurance
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Business Insurance
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Amica Mutual
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Auto Insurance
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Homeowners Insurance
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Renters Insurance
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Business Insurance
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Progressive
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Auto Insurance
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Homeowners Insurance
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Renters Insurance
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Business Insurance
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Farmers
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Auto Insurance
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Homeowners Insurance
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Renters Insurance
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Business Insurance
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  21st Century
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Auto Insurance
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Homeowners Insurance
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Renters Insurance
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Business Insurance
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  American Family
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Auto Insurance
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Homeowners Insurance
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Renters Insurance
                </td>
                <td className="border border-gray-300 px-6 py-5 font-semibold font-[Poppins]">
                  Business Insurance
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="lg:w-[87%] w-[98%] mx-auto flex md:flex-row flex-col items-center justify-between md:my-16 my-12 md:gap-0 gap-20">
        <div className="md:w-[18%] w-auto hover:shadow-2xl hover:bg-[#fff] transition-all duration-300 ease-in-out">
          <img src={Amica} alt="" className="md:w-[100%] w-[220px]" />
        </div>
        <div className="md:w-[18%] w-auto hover:shadow-2xl hover:bg-[#fff] transition-all duration-300 ease-in-out">
          <img src={Geico} alt="" className="md:w-[100%] w-[220px]" />
        </div>
        <div className="md:w-[18%] w-auto hover:shadow-2xl hover:bg-[#fff] transition-all duration-300 ease-in-out">
          <img src={Farmers} alt="" className="md:w-[100%] w-[220px]" />
        </div>
        <div className="md:w-[18%] w-auto hover:shadow-2xl hover:bg-[#fff] transition-all duration-300 ease-in-out">
          <img src={Progressive} alt="" className="md:w-[100%] w-[220px]" />
        </div>
      </div> */}
      {/* <div className="lg:w-[87%] w-[98%] mx-auto text-start mt-5">
        <div className="text-start">
          <p className="sm:text-[45px] text-[40px] font-semibold text-[#000000] font-[Rubik]">
            Additional Ways to Pay and Save 50%
          </p>
          <p className="text-lg font-normal font-[Roboto] text-[#000000] mt-3">
            You can make payments via cash or money order at a Western Union®
            INSURANCE Collect® station, or send a check by mail using the
            information on your invoice. Just have your account number ready.
          </p>
          <p className="text-lg font-normal font-[Roboto] text-[#000000] mt-5">
            Currently, 96.8% of Americans have access to wired broadband
            connections with speeds of 25 Mbps or higher. However, in Florida,
            around 464,000 people still lack access to these high-speed wired
            connections. Despite having 220 Insurance providers in the state, 1
            million Floridians only have access to one wired provider, and over
            250,000 residents do not have any wired providers available where
            they live.
          </p>
        </div>
        <div className="text-start mt-6">
          <p className="sm:text-[45px] text-[40px] font-semibold text-[#000000] font-[Rubik]">
            Insurance Costs in Florida
          </p>
          <p className="text-lg font-normal font-[Roboto] text-[#000000] mt-2">
            When it comes to the cost of Insurance in Florida, 59.8% of
            Americans have access to monthly plans priced at $60 or less.
            Florida fares slightly better than the national average, where only
            51.5% of Americans have access to plans at similar prices.
          </p>
          <div className="mt-10">
             <a
    href="tel:+18889350858"
    className="text-[15px] py-[12px] px-[24px] text-[#fff] text-center bg-[#FA9C16] rounded-[5px] w-50 font-semibold"
  >
    Speak With an Agent
  </a>
          </div>
        </div>
        <div className="text-start mt-6">
          <p className="sm:text-[45px] text-[40px] font-semibold text-[#000000] font-[Rubik]">
            Top Connected Cities
          </p>
          <p className="text-lg font-normal font-[Roboto] text-[#000000] mt-2">
            Many cities in Florida have strong wired broadband infrastructure,
            but some stand out for their optimal combination of insurance speed,
            coverage, and pricing. The top five most connected cities in Florida
            are Bradenton, Boca Raton, Hollywood, Lake Worth, and Pompano Beach,
            with Bradenton ranking as the best in the state for broadband
            connectivity.
          </p>
          <div className="mt-10">
             <a
    href="tel:+18889350858"
    className="text-[15px] py-[12px] px-[24px] text-[#fff] text-center bg-[#FA9C16] rounded-[5px] w-50 font-semibold"
  >
    Speak With an Agent
  </a>
          </div>
        </div>
        <div className="text-start mt-6">
          <p className="sm:text-[45px] text-[40px] font-semibold text-[#000000] font-[Rubik]">
            Least Connected Cities
          </p>
          <p className="text-lg font-normal font-[Roboto] text-[#000000] mt-2">
            On the other side of the digital divide, several cities in Florida
            struggle with poor broadband access. The five least connected cities
            in the state are Indian Lake Estates, Wacissa, Suwannee, Horseshoe
            Beach, and McIntosh, with Indian Lake Estates being the most poorly
            connected.
          </p>
          <div className="mt-10">
             <a
    href="tel:+18889350858"
    className="text-[15px] py-[12px] px-[24px] text-[#fff] text-center bg-[#FA9C16] rounded-[5px] w-50 font-semibold"
  >
    Speak With an Agent
  </a>
          </div>
        </div>
        <div className="text-start mt-6">
          <p className="sm:text-[45px] text-[40px] font-semibold text-[#000000] font-[Rubik]">
            Government Initiatives
          </p>
          <p className="text-lg font-normal font-[Roboto] text-[#000000] mt-2">
            Since 2010, the Florida Department of Management Services has
            received nearly $8.9 million in federal grants to support broadband
            development and data collection across the state. Additionally,
            $55.9 million in federal grants has been allocated to broadband
            infrastructure projects aimed at improving connectivity in Florida.
          </p>
          <div className="mt-10">
             <a
    href="tel:+18889350858"
    className="text-[15px] py-[12px] px-[24px] text-[#fff] text-center bg-[#FA9C16] rounded-[5px] w-50 font-semibold"
  >
    Speak With an Agent
  </a>
          </div>
        </div>
        <div className="mt-12">
          <a
            href="tel:+18889350858"
            className="text-[24px] px-[20px] py-[16px] text-[#fff] text-center bg-[#269041] rounded-[4px] font-bold"
          >
            Call Us
          </a>
      </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
