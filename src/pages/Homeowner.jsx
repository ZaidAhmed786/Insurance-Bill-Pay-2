import first from "../assets/homeowner/affordable.png";
import sec from "../assets/homeowner/bundle.png";
import thi from "../assets/homeowner/gecko_waving.png";
import fou from "../assets/homeowner/living-expenses.jpg";
import five from "../assets/homeowner/medical-bills.jpg";
import six from "../assets/homeowner/personal-liability.jpg";
import sev from "../assets/homeowner/personal-property.jpg";
import eig from "../assets/homeowner/property-damage.jpg";
import geico from "../assets/homeowner/download.png"
// import BillPopup from "./Popop";

const Homeowner = () => {
  return (
    <div className=" text-[#000] bg-gray-100 font-sans  py-10 space-y-16">

      {/* Header */}
      <div className="  md:hidden d-block  w-screen  h-screen">
         <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50  w-screen  h-screen">
      <div className="bg-white  flex-col justify-between rounded-lg shadow-lg border w-screen  h-screen border-gray-200">
        <div className="bg-blue-500 text-white text-center py-4  text-lg font-medium">
          +1(888) 706-5261
        </div>
        <div className="p-6 text-center flex-col  mt-30  justify-center">
         <img src={geico} alt=""  className="w-[50%] mx-auto mb-8" />
          {/* <p className="text-sm text-gray-600 mb-4">authorized retailer</p> */}
          <p className="text-4xl w-75  mx-auto font-medium text-gray-800 mb-6">
            Call to Pay Your Bill Now
          </p>
          <a
            href="tel:+18887065261"
            className="block  mx-auto mt-12  w-[60%]   text-lg  bg-blue-500 hover:bg-blue-700 text-white font-semibold py-4 px-4 rounded"
          >
            +1(888) 706-5261
          </a>
            
        </div>
        <div className="bg-blue-500 w-full fixed bottom-0 text-white text-center py-4  text-lg">
          Call Now +1(888) 706-5261
        </div>
      </div>
    </div>
      </div>
      <div>
      <section className="">
        <div className="min-h-screen flex  justify-center bg-gradient-to-r from-[#f1f5fb] to-[#fff7ed]  lg:px-28 md:px-10 sm:px-8 px-4 ">
      <div className="max-w-7xl w-full flex flex-col md:flex-row sm:items-center md:justify-between py-16">

        {/* Left Side Text + Input */}
        <div className="md:w-1/2 sm:w-[100%] space-y-5 text-start">
          <h1 className="sm:text-4xl text-3xl font-bold text-gray-900">Homeowners Insurance</h1>
          <p className="text-gray-700 max-w-md sm:[100%] w-[80%]">
            Switch and you could save on homeowners insurance. Get a free
            homeowners insurance quote today to protect your investment.
          </p>

          <p className="font-semibold text-black mt-4">Get a homeowners insurance quote</p>

          <div className="sm:flex items-center gap-2 mt-2">
            <button className=" text-md font-bold  text-gray-700  px-6 py-3 rounded-full hover:cursor-pointer sm:mt-0 mt-5">
              Call Us
            </button>
           
            <button className="bg-[#004B9B] text-md font-bold  text-white  px-6 py-3 rounded-full hover:bg-blue-800 sm:mt-0 mt-5">
              Start Homeowners Quote
            </button>
          </div>

          <p className="text-sm mt-2 font-medium text-[17px] text-gray-700">
            Already have a quote?{' '}
            <a href="#" className="text-blue-500 font-bold underline">Continue with a previous quote</a>
          </p>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={thi}
            alt="Gecko Mascot"
          
            className="object-contain"
          />
        </div>
      </div>
    </div>
 
      </section>

      {/* Insurance Explanation */}
      <section className="flex flex-col-reverse md:flex-row items-start gap-1 lg:px-28 md:px-10 sm:px-8 px-4">
        <div className="w-full md:w-1/2 bg-[linear-gradient(135deg, #FFEFD0, #C0D9FD);] md:mt-0 mt-8">
          <img src={first} alt="Woman on Laptop"  className="rounded-lg img-fluid" />
        </div>
        <div className="w-full text-start md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-3xl font-bold">What is homeowners insurance?</h2>
          <p className="mt-2 text-lg leading-relaxed  ">
            Homeowners insurance is a type of property insurance that provides financial protection to homeowners in the event of damage or loss to their private residence and its contents. Home insurance may also offer liability coverage against certain types of accidents that occur within your home or on your property. If you own your home, having reliable homeowners insurance is important to safeguard against unexpected accidents or events that could lead to significant financial losses. Enjoy peace of mind by getting a homeowners insurance quote online today, and then customize your coverage with innovative discounts, support from a local insurance agent, and more.
          </p>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="lg:px-28 md:px-10 sm:px-8 px-4 ">
        <h2 className="text-4xl text-start text-[#265F5F] font-bold mb-4">Personalized Home Insurance Coverages</h2>
        <p className="text-[28px] font-medium text-[#1C1C1E] text-start mb-3">Customize your homeowners insurance with the coverages you need.</p>
        <p className="text-lg text-start text-[#1C1C1E]  pb-10 pt-1">Protect your investment with homeowners insurance. Get personalized insurance coverage for accidents in your home, giving you peace of mind and financial security.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  ">

      <div className="relative overflow-hidden rounded-2xl shadow-md">
        <img
          src={eig}
          alt="Property Damage"
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 text-xl font-bold">
          Property Damage
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl shadow-md">
        <img
          src={sev}
          alt="Personal Property"
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 text-xl font-bold">
          Personal Property
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl shadow-md">
        <img
          src={six}
          alt="Personal Liability"
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 text-xl font-bold">
          Personal Liability
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl shadow-md">
        <img
          src={five}
          alt="Medical Bills"
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 text-xl font-bold">
          Medical Bills
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl shadow-md">
        <img
          src={fou}
          alt="Living Expenses"
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 text-xl font-bold">
          Living Expenses
        </div>
      </div>

    </div>
      </section>

      <section className=" lg:px-28 md:px-10 sm:px-8 px-4">
         <div className="space-y-10  max-w-7xl mx-auto">

      {/* Section 1: Header and Two Cards */}
      <div>
        <h2 className="text-4xl text-start text-[#265F5F] font-bold mb-4">Homeowners Insurance is Easy and Convenient when you get help with GEICO!</h2>
        <p className="text-[28px] font-medium text-[#1C1C1E] text-start mb-3">Buying, setting up, and servicing your homeowners policy is easy.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className=" border rounded-xl border-gray-300 text-start shadow-sm px-8 py-16">
            <h3 className="text-3xl font-semibold text-black">Get a Homeowners Insurance Quote</h3>
            <p className="mt-2 text-md text-[#1c1c1e] font-medium my-4">Tailor a policy to fit your needs and budget. Get a quick and easy quote to get started on your homeowners insurance today! If you need more information, check out the links below for more details.</p>
            <ul className="list-disc list-black list-inside text-md ms-3 text-blue-600 font-bold mt-2">
              <li>Home insurance coverages</li>
              <li>Personal Property Insurance calculator</li>
              <li>Multi-policy discount</li>
            </ul>
          </div>

          <div className="p-4 border rounded-xl text-start border-gray-300 shadow-sm px-8 py-16">
            <h3 className="text-3xl font-semibold text-black">Homeowners Insurance Policy Service and Claims</h3>
            <p className="mt-2 text-md text-[#1c1c1e] font-medium my-4">After your policy is started, you can work with the GEICO Insurance Agency partner for help with:</p>
            <ul className="list-disc list-black list-inside text-md ms-3 font-bold text-[#1c1c1e] mt-2">
              <li>Bill payments</li>
              <li>Online claims</li>
              <li> <a href="#" className="text-blue-600">Reporting claims</a>,Support center</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 2: Discounts and Benefits */}
      <div>
        <h2 className="text-4xl text-start text-[#265F5F] font-bold mb-4">Homeowners Insurance Discounts and Savings</h2>
        <p className="text-[28px] font-medium text-[#1C1C1E] text-start mb-3">Save even more on a home insurance policy!</p>
        <p className="text-md text-start text-[#1C1C1E] font-medium  pb-10 pt-1">See how affordable a homeowners insurance quote can be through the GEICO Insurance Agency. Check out the discount options available to save even more on a home insurance policy.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-center">
          <div className="text-start">
            <h3 className="text-3xl font-semibold text-black">Bundle and Save on Homeowners Insurance</h3>
            <p className=" text-md text-[#1c1c1e] font-medium my-4">Combine your auto and home insurance for extra savings. Its simple and convenient to bundle with GEICO.</p>
            <button className="mt-4 px-8 py-3 text-blue-900 border border-blue-900  font-bold rounded-3xl hover:bg-blue-700 hover:text-white text-sm">Start Saving</button>
          </div>
          <img src={sec} alt="Bundle Savings" className="rounded-xl shadow-md w-full h-auto object-cover" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
          <div className=" bg-white  text-start rounded-xl  shadow-sm p-8 ">
            <h4 className="text-3xl font-semibold text-black">Home Security Insurance Discount</h4>
            <p className="text-md text-[#1c1c1e] font-medium my-4">Alarm systems and cameras help protect your home and your wallet by giving you peace of mind and another discount opportunity.</p>
          </div>
          <div className="   text-start rounded-xl bg-white shadow-sm p-8 ">
            <h4 className="text-3xl font-semibold text-black">Safety Equipment Homeowners Insurance Discount</h4>
            <p className="text-md text-[#1c1c1e] font-medium my-4">Smoke detectors and fire extinguishers save lives and could save you money on your homeowners insurance.</p>
          </div>
        </div>
      </div>

    </div>
      </section>

      <section className="lg:px-28 md:px-10 sm:px-8 px-4">
        <div className="space-y-10  max-w-7xl mx-auto">   
      <div>
        <h2 className="text-4xl text-start text-[#265F5F] font-bold mb-4">Additional Homeowners Insurance Coverage</h2>
        <p className="text-md text-start text-[#1C1C1E] font-medium  pb-8 pt-1">In addition to basic homeowners insurance policies, there are additional coverages you can choose to enhance your financial security and peace of mind, including:</p>

        <ul className="list-disc list-inside text-md text-start text-[#1c1c1e] font mt-4 space-y-1">
          <li><strong className="text-blue-700 cursor-pointer" >Flood Insurance</strong> – Protects against severe water damage from events like heavy rain, melting snow, or coastal storms.</li>
          <li><strong className="text-blue-700 cursor-pointer" >Umbrella Insurance</strong> – Provides extra liability coverage beyond the limits of your standard homeowners policy to offer additional protection from accidents and lawsuits.</li>
          <li><strong className="text-blue-700 cursor-pointer" >Earthquake Insurance</strong> – Provides coverage for damage caused by seismic activities.</li>
        </ul>
      </div>

      {/* Section 4: Other Types of Home Insurance */}
      <div className="mt-40">
        <h2 className="text-4xl text-start text-[#265F5F] font-bold mb-4">Other Types of Home Insurance</h2>
        <p className="text-[28px] font-medium text-[#1C1C1E] text-start mb-3">Find insurance coverage for other types of property.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="p-8 text-start rounded-xl bg-white shadow-sm">
            <h4 className="text-xl font-semibold text-black">Mobile Home Insurance</h4>
            <p className="text-md text-[#1c1c1e] font-medium my-4">A mobile or manufactured home policy provides coverage for your home, personal belongings, and structures on the land you own. Start your mobile or manufactured home insurance quote today!</p>
           <div className="text-center"><button className="mt-4 px-8 py-3 text-blue-900 border border-blue-900  font-bold rounded-3xl hover:bg-blue-700 hover:text-white text-sm ">Start Quote</button> </div>
          </div>

          <div className="p-8 text-start rounded-xl bg-white shadow-sm">
            <h4 className="text-xl font-semibold text-black">Landlord Insurance</h4>
            <p className="text-md text-[#1c1c1e] font-medium my-4">Whether you own multiple rental properties or need to sublet your home for a year while you travel for business, we can help with Landlord Insurance.</p>
           <div className="text-center"><button className="mt-4 px-8 py-3 text-blue-900 border border-blue-900  font-bold rounded-3xl hover:bg-blue-700 hover:text-white text-sm ">Learn More</button> </div>
          </div>

          <div className="p-8 text-start rounded-xl bg-white shadow-sm">
            <h4 className="text-xl font-semibold text-black">Renters Insurance</h4>
            <p className="text-md text-[#1c1c1e] font-medium my-4">If you rent an apartment, condo, house, etc., you need renters insurance. Get a renters insurance quote today and we’ll show you how easy and affordable it is to protect what you care about.</p>
           <div className="text-center"><button className="mt-4 px-8 py-3 text-blue-900 border border-blue-900  font-bold rounded-3xl hover:bg-blue-700 hover:text-white text-sm ">Start Quote</button> </div>
          </div>
        </div>
      </div>

    </div>
      </section>

      <section className="lg:px-28 md:px-10 sm:px-8 px-4">
         <div className=" text-start py-10 max-w-5xl md:mx-0 mx-auto">
      <h1 className="text-4xl font-bold mb-6">Home insurance resources</h1>
      <ul className="list-disc pl-5 space-y-2 font-bold  text-md text-blue-700">
        <li><a href="#" className="hover:underline">Types of Property Insurance for Your Home</a></li>
        <li><a href="#" className="hover:underline">What Does Home Insurance Cover?</a></li>
        <li><a href="#" className="hover:underline">What is Personal Property Coverage?</a></li>
        <li><a href="#" className="hover:underline">Personal Property Insurance Calculator: Get a Personal Property Value Estimate</a></li>
        <li><a href="#" className="hover:underline">How to Create a Home Inventory</a></li>
        <li><a href="#" className="hover:underline">Find a Local Agent Near You</a></li>
      </ul>

      <div className="mt-30">
        <h2 className="text-4xl text-start text-[#265F5F] font-bold mb-4">Were here to help you with your home insurance needs</h2>
        <h3 className="text-[28px] font-medium text-[#1C1C1E] text-start mb-3">Speak with a GEICO agent about homeowners insurance.</h3>
        <p className="text-md text-[#1c1c1e] font-medium my-4">
          You can reach a homeowners insurance sales agent at <a href="tel:8008413005" className="text-blue-700 underline">+1(888) 706-5261</a>. Our GEICO agents are uniquely prepared to explain your coverage options, assist in finding you the best deals, and help get protection for your family. If you have any questions about homeowners insurance quotes or how to get insurance for home furnishings, contact us today.
        </p>
        <div className="space-y-1 text-gray-800">
          <p><strong>Mon – Fri</strong> <span className="float-right">7:00 AM – 11:00 PM (ET)</span></p>
          <p><strong>Sat – Sun</strong> <span className="float-right">8:00 AM – 10:30 PM (ET)</span></p>
        </div>
        <div className="mt-4 text-blue-700 underline cursor-pointer">Hawaii</div>
      </div>
    </div>
      </section>
    </div>
    </div>
  )
}

export default Homeowner;