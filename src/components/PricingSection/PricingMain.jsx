import React from 'react';
import PricingTopHeading from './PricingTopHeading';
import PricingCardMain from './PricingCardMain';

function PricingMain() {
  return (
    <div id="pricing" className="w-[90%] mx-auto">
      <div>
        <PricingTopHeading />
        <PricingCardMain />
      </div>
    </div>
  );
}

export default PricingMain;
