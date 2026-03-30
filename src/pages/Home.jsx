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

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center lg:h-[510px] h-auto w-[100%] bg-black md:px-0 px-3">
        <div className="flex lg:w-[84%] w-[98%] h-[100%] justify-between lg:items-start items-center lg:flex-row flex-col">
          <div className="flex flex-col lg:w-[580px] w-[98%] lg:h-[66%] h-auto lg:mt-auto ms:mt-40 mt-24">
            <p className="text-[38px] font-[Roboto] leading-[40px] text-[#fff] font-semibold text-start">
              Enhance your Financial management with our Expert billing
              solutions.
            </p>
            <strong className="text-[#fff] text-start mt-[18px]">
              Transform and elevate your financial landscape with the advanced
              billing expertise of our skilled team, empowering you to navigate
              complexities and secure a brighter, more prosperous financial
              future.
            </strong>
            <div className="w-[100%] flex justify-center mt-[36px]">
              <a
                href="tel:+18886193828"
                className="text-[15px] py-[12px] px-[24px] text-[#fff] text-center bg-[#FA9C16] rounded-[5px] font-semibold"
              >
                Pay with us
              </a>
            </div>
          </div>
          <div>
            <img src={HeroImage} alt="" />
          </div>
        </div>
      </div>

      <div  className="md:px-0 px-3">

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
            Connect with our billing department to pay your monthly insurance
            bill today.
          </p>
          <ul className="list-disc pl-5 text-start w-[92%] flex flex-col gap-[16px] my-[20px]">
            <li className="leading-[25px]">
              <strong className="text-[#000000] text-[19px] font-[Poppins]">
                Pay your bill and enjoy a discount
              </strong>
            </li>
            <li className="leading-[25px]">
              <strong className="text-[#000000] text-[19px] font-[Poppins]">
                No additional fees for phone payments
              </strong>
            </li>
            <li className="leading-[25px]">
              <strong className="text-[#000000] text-[19px] font-[Poppins]">
                Convenient insurance bill payment through our automated system
              </strong>
            </li>
          </ul>
          <p className="text-[18px] font-[Roboto] underline font-bold">
            Pay Your GEICO Insurance Bill Online:
          </p>
        </div>

        <div className="md:w-[48%] w-[100%] flex flex-col items-start text-start md:py-[50px] md:px-[40px] py-[40px] px-[30px] rounded-[8px] bg-[#F9F9FB] hover:shadow-2xl hover:bg-[#fff] transition-all duration-300 ease-in-out">
          <div className="w-[83px] h-[83px]">
            <img src={Clipboard} alt="" />
          </div>
          <p className="text-[32px] font-semibold text-[#000000] font-[Barlow] my-[15px]">
            State Farm Insurance
          </p>
          <p className="text-[18px] font-[Poppins] text-[#000000]">
            Connect with our billing department to pay your monthly State Farm
            insurance bill now.
          </p>
          <ul className="list-disc pl-5 text-start w-[92%] flex flex-col gap-[16px] my-[20px]">
            <li className="leading-[25px]">
              <strong className="text-[#000000] text-[19px] font-[Poppins]">
                Pay your bill and receive a discount
              </strong>
            </li>
            <li className="leading-[25px]">
              <strong className="text-[#000000] text-[19px] font-[Poppins]">
                No extra fees for phone payments
              </strong>
            </li>
            <li className="leading-[25px]">
              <strong className="text-[#000000] text-[19px] font-[Poppins]">
                Easy insurance bill payment through our automated system.
              </strong>
            </li>
          </ul>
          <p className="text-[18px] font-[Roboto] underline font-bold">
            Pay Your State Farm Insurance Bill Online:
          </p>
        </div>
        <div className="md:w-[48%] w-[100%] flex flex-col items-start text-start md:py-[50px] md:px-[40px] py-[40px] px-[30px] rounded-[8px] bg-[#F9F9FB] hover:shadow-2xl hover:bg-[#fff] transition-all duration-300 ease-in-out">
          <div className="w-[83px] h-[83px]">
            <img src={Hygiene} alt="" />
          </div>
          <p className="text-[32px] font-semibold text-[#000000] font-[Barlow] my-[15px]">
            PROGRESSIVE INSURANCE
          </p>
          <p className="text-[18px] font-[Poppins] text-[#000000]">
            Contact our billing department to pay your monthly Progressive
            insurance bill today.
          </p>
          <ul className="list-disc pl-5 text-start w-[92%] flex flex-col gap-[16px] my-[20px]">
            <li className="leading-[25px]">
              <strong className="text-[#000000] text-[19px] font-[Poppins]">
                Enjoy a discount when you pay your bill
              </strong>
            </li>
            <li className="leading-[25px]">
              <strong className="text-[#000000] text-[19px] font-[Poppins]">
                No additional fees for phone payments
              </strong>
            </li>
            <li className="leading-[25px]">
              <strong className="text-[#000000] text-[19px] font-[Poppins]">
                Convenient bill payment through our automated system
              </strong>
            </li>
          </ul>
          <p className="text-[18px] font-[Roboto] underline font-bold">
            Pay Your Progressive Insurance Bill Online:
          </p>
        </div>
        <div className="md:w-[48%] w-[100%] flex flex-col items-start text-start md:py-[50px] md:px-[40px] py-[40px] px-[30px] rounded-[8px] bg-[#F9F9FB] hover:shadow-2xl hover:bg-[#fff] transition-all duration-300 ease-in-out">
          <div className="w-[83px] h-[83px]">
            <img src={Shield} alt="" />
          </div>
          <p className="text-[32px] font-semibold text-[#000000] font-[Barlow] my-[15px]">
            Farmers Insurance
          </p>
          <p className="text-[18px] font-[Poppins] text-[#000000]">
            Reach out to our billing department to pay your monthly Farmers
            Insurance bill today.
          </p>
          <ul className="list-disc pl-5 text-start w-[92%] flex flex-col gap-[16px] my-[20px]">
            <li className="leading-[25px]">
              <strong className="text-[#000000] text-[19px] font-[Poppins]">
                Receive a discount when you pay your bill
              </strong>
            </li>
            <li className="leading-[25px]">
              <strong className="text-[#000000] text-[19px] font-[Poppins]">
                No extra fees for phone payments
              </strong>
            </li>
            <li className="leading-[25px]">
              <strong className="text-[#000000] text-[19px] font-[Poppins]">
                Hassle-free bill payment with our automated system
              </strong>
            </li>
          </ul>
          <p className="text-[18px] font-[Roboto] underline font-bold">
            Pay Your State Farm Insurance Bill Online:
          </p>
        </div>
        <div className="md:w-[48%] w-[100%] flex flex-col items-start text-start md:py-[50px] md:px-[40px] py-[40px] px-[30px] rounded-[8px] bg-[#F9F9FB] hover:shadow-2xl hover:bg-[#fff] transition-all duration-300 ease-in-out">
          <div className="w-[83px] h-[83px]">
            <img src={Insurance2} alt="" />
          </div>
          <p className="text-[32px] font-semibold text-[#000000] font-[Barlow] my-[15px]">
            21st CENTURY INSURANCE
          </p>
          <p className="text-[18px] font-[Poppins] text-[#000000]">
            RContact our billing department to pay your monthly 21st Century
            Insurance bill today.
          </p>
          <ul className="list-disc pl-5 text-start w-[92%] flex flex-col gap-[16px] my-[20px]">
            <li className="leading-[25px]">
              <strong className="text-[#000000] text-[19px] font-[Poppins]">
                Pay your bill and receive a discount
              </strong>
            </li>
            <li className="leading-[25px]">
              <strong className="text-[#000000] text-[19px] font-[Poppins]">
                No extra fees for phone payments
              </strong>
            </li>
            <li className="leading-[25px]">
              <strong className="text-[#000000] text-[19px] font-[Poppins]">
                Quick and easy bill payment through our automated system
              </strong>
            </li>
          </ul>
          <p className="text-[18px] font-[Roboto] underline font-bold">
            Pay Your 21st Century Insurance Bill Online:
          </p>
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
      <div className="lg:w-[87%] w-[98%] mx-auto flex md:flex-row flex-col items-center justify-between md:my-16 my-12 md:gap-0 gap-20">
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
      </div>
      <div className="lg:w-[87%] w-[98%] mx-auto text-start">
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
              href="tel:+18886193828"
              className="text-[15px] py-[12px] px-[24px] text-[#fff] text-center bg-[#FFD800] rounded-[4px] font-semibold"
            >
              Pay with us
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
              href="tel:+18886193828"
              className="text-[15px] py-[12px] px-[24px] text-[#fff] text-center bg-[#FFD800] rounded-[4px] font-semibold"
            >
              Pay with us
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
              href="tel:+18886193828"
              className="text-[15px] py-[12px] px-[24px] text-[#fff] text-center bg-[#FFD800] rounded-[4px] font-semibold"
            >
              Pay with us
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
              href="tel:+18886193828"
              className="text-[15px] py-[12px] px-[24px] text-[#fff] text-center bg-[#FFD800] rounded-[4px] font-semibold"
            >
              Pay with us
            </a>
          </div>
        </div>
        <div className="mt-12">
          <a
            href="tel:+18886193828"
            className="text-[24px] px-[20px] py-[16px] text-[#fff] text-center bg-[#269041] rounded-[4px] font-bold"
          >
            Call Us
          </a>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
