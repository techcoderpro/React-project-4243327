import React from 'react';
import HeadingRightItems from './HeadingRightItems';
import pricingChickImage from '../../Assets/pricingChickImage.svg';
function PricingTopHeadingRight() {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-center flex-wrap m-4 md:m-20">
      <HeadingRightItems
        isicons={pricingChickImage}
        isTitle="Unlimited Pages"
      />
      <HeadingRightItems
        isicons={pricingChickImage}
        isTitle="Free Sub-Domain"
      />
      <HeadingRightItems
        isicons={pricingChickImage}
        isTitle="Unlimited Pages"
      />
      <HeadingRightItems
        isicons={pricingChickImage}
        isTitle="Free SSL Certificate"
      />
      <HeadingRightItems
        isicons={pricingChickImage}
        isTitle="Unlimited Pages"
      />
      <HeadingRightItems isicons={pricingChickImage} isTitle="24/7 Support" />
    </div>
  );
}

export default PricingTopHeadingRight;
