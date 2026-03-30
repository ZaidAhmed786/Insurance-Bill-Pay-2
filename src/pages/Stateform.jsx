// StateForm.jsx
import image from "../assets/stateform/insurance-landing-hero-optimized_XL.webp"
import image1 from "../assets/stateform/auto_redesign_agent_module.png"
import image2 from "../assets/stateform/autoInsuranceApp.jpg"
import image3 from "../assets/stateform/electricProof.jpg"
import image4 from "../assets/stateform/homeBizCoverage.jpg"
import image5 from "../assets/stateform/insurance-landing-personal-optimized_XL.webp"
import image6 from "../assets/stateform/insurance-landing-property-optimized_XL.webp"
import image7 from "../assets/stateform/set.jpg"
import image8 from "../assets/stateform/insurance-landing-vehicles-optimized_XL.webp"
import image9 from "../assets/stateform/replacement-cost-vs-market-value.jpg"


const articles = [
  {
    image: image9,
    title: 'Replacement cost vs. market value',
  },
  {
    image: image4,
    title: 'Term or Whole Life insurance: Which is right for you?',
  },
  {
    image: image2,
    title: 'Avoid these 6 big mistakes of auto insurance applications',
  },
  {
    image: image3,
    title: 'Obtain an electronic proof of insurance card',
  },
];
const StateForm = () => {
  return (
     <div className="bg-white lg:px-20 md:px-10 sm:px-6 px-4 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Column - Text and Form */}
        <div className="text-start md:pe-7">
          <h1 className="md:text-5xl text-4xl font-semibold text-gray-800 mb-4 leading-tight">
            Get great insurance and 
            a great value
          </h1>
          <p className="text-black mb-6 text-xl">
            You’ve worked hard to get to where you are. But the world can throw the unexpected at you. 
            Let State Farm<sup>®</sup> insurance help protect you, your loved ones and the life you’ve built.
          </p>

          {/* Form Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pe-32">
            <select className="border border-gray-300 p-3 rounded">
              <option>Auto</option>
              <option>Home</option>
              <option>Life</option>
              <option>Health</option>
            </select>
            <input
              type="text"
              placeholder="ZIP Code"
              className="border border-gray-300 p-3 rounded"
            />
            <button className="bg-red-600 text-white font-semibold p-3 rounded hover:bg-red-700">
              Start a quote
            </button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="hidden lg:flex justify-center mx-auto">
          <img
            src={image}
            alt="Family at table"
            className="max-w-full h-auto  "
          />
        </div>

      </div>
       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16" >
        
        {/* Left Side Image */}
        <div className="hidden lg:flex justify-center">
          <img
            src={image8}
            alt="People with kayak on car"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Side Content */}
        <div className="text-start">
          <h2 className="md:text-4xl text-3xl font-bold text-gray-800 mb-4">
            Vehicle insurance
          </h2>
          <p className="text-gray-700 mb-8 text-md pe-5">
            Why is State Farm the largest insurer of automobiles in the U.S.? Great{" "}
            <span className="text-red-600 cursor-pointer ">insurance coverage options</span>, 
            competitive prices, easy claims and excellent service might have something to do with it. 
            Select a vehicle type to learn how we protect it.
          </p>

          {/* Insurance Links Grid */}
          <div className="grid sm:grid-cols-2 grid-cols-1   gap-x-8 gap-y-6 text-gray-800 text-sm">
            <div>
              <p className="font-semibold text-xl">Car</p>
              <p className="text-red-600 cursor-pointer ">
                Vehicle insurance <span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Motorcycle</p>
              <p className="text-red-600 cursor-pointer ">
                Motorcycle insurance <span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Boat</p>
              <p className="text-red-600 cursor-pointer ">
                Boat insurance <span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">RV</p>
              <p className="text-red-600 cursor-pointer ">
                Motorhome insurance <span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Off-road vehicle</p>
              <p className="text-red-600 cursor-pointer ">
                Off-road vehicle insurance <span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Classic car</p>
              <p className="text-red-600 cursor-pointer ">
                Classic & antique cars insurance <span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Personal mobility</p>
              <p className="text-red-600 cursor-pointer ">
                Rideshare insurance <span className="text-black" >coverage</span>
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16" >
        
       

        {/* Right Side Content */}
        <div className="text-start">
          <h2 className="md:text-4xl text-3xl font-bold text-gray-800 mb-4">
            Home & property insurance
          </h2>
          <p className="text-gray-700 mb-8 text-md pe-5">
           House, condo, or apartment, if it’s your home, it can benefit from State Farm protection. Find out why we insure more homes than any other company in the U.S.1
          </p>

          {/* Insurance Links Grid */}
          <div className="grid sm:grid-cols-2 grid-cols-1  gap-x-8 gap-y-6 text-gray-800 text-sm">
            <div>
              <p className="font-semibold text-xl">Home</p>
              <p className="text-red-600 cursor-pointer ">
                Homeowners insurance  <span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Condo</p>
              <p className="text-red-600 cursor-pointer ">
                Condominium unitowners insurance <span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Renters</p>
              <p className="text-red-600 cursor-pointer ">
                Renters insurance <span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Rental property</p>
              <p className="text-red-600 cursor-pointer ">
               Rental property insurance <span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Personal articles</p>
              <p className="text-red-600 cursor-pointer ">
               Personal articles insurance  <span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Manufactured home</p>
              <p className="text-red-600 cursor-pointer ">
                Manufactured home insurance <span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Farm & ranch</p>
              <p className="text-red-600 cursor-pointer ">
                Farm & ranch insurance  <span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Identity restoration</p>
              <p className="text-red-600 cursor-pointer ">
               Identity restoration insurance  <span className="text-black" >coverage</span>
              </p>
            </div>
          </div>
        </div>

         <div className="hidden lg:flex justify-center">
          <img
            src={image6}
            alt="People with kayak on car"
            className="max-w-full h-auto"
          />
        </div>
      </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16" >
        
        {/* Left Side Image */}
        <div className="hidden lg:flex justify-center">
          <img
            src={image5}
            alt="People with kayak on car"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Side Content */}
        <div className="text-start">
          <h2 className="md:text-4xl text-3xl font-bold text-gray-800 mb-4">
            Personal insurance
          </h2>
          <p className="text-gray-700 mb-8 text-md pe-5">
            Securing your family’s financial future can be a major concern. Let us help. With a range of products, cost structures, and unmatched financial strength, State Farm Life Insurance is a smart choice and a great value.
          </p>

          {/* Insurance Links Grid */}
          <div className="grid sm:grid-cols-2 grid-cols-1  gap-x-8 gap-y-6 text-gray-800 text-sm">
            <div>
              <p className="font-semibold text-xl">Life</p>
              <p className="text-red-600 cursor-pointer ">
                Life insurance  <span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Personal liability</p>
              <p className="text-red-600 cursor-pointer ">
                Personal liability insurance <span className="text-black" >coverage</span>
              </p>
            </div>
           
            <div>
              <p className="font-semibold text-xl">Health insurance</p>
              <p className="text-red-600 cursor-pointer ">
                Health insurance  <span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Disability insurance</p>
              <p className="text-red-600 cursor-pointer ">
                Disability insurance <span className="text-black" >coverage</span>
              </p>
            </div>
            
            <div>
              <p className="font-semibold text-xl">Liability insurance</p>
              <p className="text-red-600 cursor-pointer ">
                Liability insurance  <span className="text-black" >coverage</span>
              </p>
            </div>
             <div>
              <p className="font-semibold text-xl">Pet</p>
              <p className="text-red-600 cursor-pointer ">
                Pet insurance <span className="text-black" >coverage</span>
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16" >
        
       

        {/* Right Side Content */}
        <div className="text-start">
          <h2 className="md:text-4xl text-3xl font-bold text-gray-800 mb-4">
            Small business insurance
          </h2>
          <p className="text-gray-700 mb-8 text-md pe-5">
           Being your own boss is great. Navigating the complicated world of small business insurance? Not so much. We’ll make it easy to find the insurance you want to help protect what you’ve worked so hard to achieve.
          </p>

          {/* Insurance Links Grid */}
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6 text-gray-800 text-sm">
            <div>
              <p className="font-semibold text-xl">Small business</p>
              <p className="text-red-600 cursor-pointer ">
               Small business insurance <span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Business owners</p>
              <p className="text-red-600 cursor-pointer ">
                Business owners insurance<span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Business liability</p>
              <p className="text-red-600 cursor-pointer ">
              Professional liability insurance<span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Commercial umbrella</p>
              <p className="text-red-600 cursor-pointer ">
               Commercial business insurance<span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Workers compensation</p>
              <p className="text-red-600 cursor-pointer ">
               Workers compensation insurance <span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Contractors</p>
              <p className="text-red-600 cursor-pointer ">
               <span className="text-black" >Policies for</span> contractors
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Surety & fidelity bonds</p>
              <p className="text-red-600 cursor-pointer ">
               Contract insurance <span className="text-black" >coverage</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Commercial auto</p>
              <p className="text-red-600 cursor-pointer ">
              Commercial vehicle insurance <span className="text-black" >coverage</span>
              </p>
            </div>
          </div>
        </div>

         <div className="hidden lg:flex justify-center">
          <img
            src={image7}
            alt="People with kayak on car"
            className="max-w-full h-auto"
          />
        </div>
      </div>



       <div className="bg-[#d62311] text-white rounded-lg grid grid-cols-1 lg:grid-cols-2    gap-3">
      {/* Text and form */}
      <div className="text-start py-18 lg:ps-20 sm:px-20 px-10  ">
        <h2 className="text-3xl font-bold mb-2">Get a local agent who gets you</h2>
        <p className="text-lg font-semibold mb-4">
          There's a State Farm agent nearby ready to offer personalized service to fit your specific needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="ZIP Code"
            className="px-4 py-2 rounded bg-white text-gray-800 focus:outline-none w-full sm:w-auto"
          />
          <button className="bg-white text-red-600 font-semibold px-6 py-2 rounded-4xl hover:bg-gray-100 transition">
            Find an agent
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="hidden lg:flex justify-center md:justify-end">
        <img
          src={image1}
          alt="Agent"
          className="w-100 h-auto object-object-fit-contain rounded"
        />
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 py-30">
      {/* Heading */}
      <div className="text-start mb-10">
        <h2 className="md:text-4xl text-3xl font-bold text-gray-900">Simple Insights<sup>®</sup></h2>
        <p className="mt-2 text-gray-700">
          Looking for help? You've come to the right place. Articles from{' '}
          <span className="text-red-600 font-semibold">Simple Insights</span> draw on over 100 years of State Farm knowledge.
        </p>
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {articles.map((item, index) => (
          <div key={index} className="space-y-2">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <p className="text-sm text-start font-semibold text-red-700">{item.title}</p>
          </div>
        ))}
      </div>
    </div>

     <div className="text-start max-w-5xl  px-4 py-8 text-sm text-gray-700 space-y-4">
      <p>
        1 Based on 2021 written premium as reported by S&P Global Market Intelligence.
      </p>

      <p>
        This document contains only a general description of coverages and is not a statement of contract. 
        All coverages are subject to all policy provisions and applicable endorsements. For further information, 
        please see a <span className="font-semibold">State Farm Agent</span>. Please refer to your actual policy 
        for a complete list of covered losses or a complete list of losses not insured and policy exclusion. 
        Actual annual premiums for insurance will vary depending on coverages selected, amounts of coverage, 
        deductibles, and other factors.
      </p>

      <div className="space-y-1">
        <p>State Farm Mutual Automobile Insurance Company</p>
        <p>State Farm Indemnity Company</p>
        <p>State Farm Fire and Casualty Company</p>
        <p>State Farm General Insurance Company</p>
        <p>State Farm Life Insurance Company (Not Licensed in MA, NY or WI)</p>
        <p>State Farm Life and Accident Assurance Company (Licensed in NY and WI)</p>
        <p>Bloomington, IL</p>
      </div>

      <div className="space-y-1">
        <p>State Farm Florida Insurance Company</p>
        <p>Tallahassee, FL</p>
      </div>

      <div className="space-y-1">
        <p>State Farm County Mutual Insurance Company of Texas</p>
        <p>State Farm Lloyds</p>
        <p>Richardson, TX</p>
      </div>
    </div>
    </div>
  );
};

export default StateForm;
