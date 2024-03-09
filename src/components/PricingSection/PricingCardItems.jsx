import React from 'react';

function PricingCardItems({ Plan, money, cardtitle, isButton }) {
  return (
    <div className="w-full md:w-[45%] lg:w-[30%] bg-white border-2 border-[#87308a] py-16 px-6 rounded-2xl mb-12 shadow-xl">
      <h3 className="text-[#87308a] font-normal text-[26px] mb-2">{Plan}</h3>
      <h3 className="text-[#87308a] font-bold text-[42px] mb-5">{money}</h3>
      <button className=" text-xl text-white bg-[#6a5acd] py-2 px-5 capitalize rounded-md hover:bg-LightGray transition-all">
        {isButton}
      </button>
      <p className="text-lg mt-7">{cardtitle}</p>
    </div>
  );
}

export default PricingCardItems;
