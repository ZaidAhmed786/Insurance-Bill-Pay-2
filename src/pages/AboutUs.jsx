import MainImage from "../assets/aboutImage.png";

const AboutUs = () => {
  return (
    <div className="w-[100%] mt-8 md:mx-0 mx-3">
      {/* <div className="w-[100%] lg:h-[460px] md:h-[400px] h-[350px]">
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
            About Us
          </p>
        </div>
      </div> */}
      
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
      <div className="text-start lg:w-[82%] w-[98%] mx-auto">
        <p className="text-[17px] font-normal text-[#7A7A7A] font-[Roboto]">
          At <span className="font-semibold">getquotenow.store</span> , we
          understand how important it is to stay on top of your insurance
          payments. That’s why we offer:
        </p>
        <ul className="mt-4 pl-10 flex flex-col gap-1">
          <li className="text-[17px] font-normal text-[#7A7A7A] font-[Roboto] list-disc">
            <span className="font-bold">Ease of Use</span>: Our platform is
            designed to be intuitive and user-friendly, allowing you to navigate
            through your payment options effortlessly.
          </li>
          <li className="text-[17px] font-normal text-[#7A7A7A] font-[Roboto] list-disc">
            <span className="font-bold">Security</span>: Your financial
            information is always protected with industry-standard encryption,
            ensuring that your payments are processed safely.
          </li>
          <li className="text-[17px] font-normal text-[#7A7A7A] font-[Roboto] list-disc">
            <span className="font-bold">Trusted Partners</span>: We work with
            some of the most reputable insurance companies, such as{" "}
            <span className="font-bold">
              GEICO Insurance, State Farm Insurance, Progressive Insurance,
              Farmers Insurance
            </span>
            , and <span className="font-bold">21st Century Insurance</span>, to
            ensure that your insurance needs are handled efficiently.
          </li>
        </ul>
        <p className="text-[17px] font-normal text-[#7A7A7A] font-[Roboto] my-12">
          Our team is committed to providing a seamless experience by
          streamlining your payment processes and offering reliable customer
          support whenever you need it. With
        </p>
        <p className="text-[17px] font-normal text-[#7A7A7A] font-[Roboto]">
          <span className="font-semibold">getquotenow.store</span>, you
          can focus on what matters most — your financial well-being, knowing
          that your insurance payments are in safe hands.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
