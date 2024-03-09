import React from 'react'
import PricingCardItems from './PricingCardItems'
function PricingCardMain() {
    return (
        <div className='flex justify-between flex-wrap'>
            <PricingCardItems
                Plan="Starter Plan"
                money="Free"
                isButton="Proceed Free"
                cardtitle="Free static.app domain included, No credit card"
            />
            <PricingCardItems
                Plan="Yearly Plan"
                money="$9/month"
                isButton="Proceed Anually"
                cardtitle="Free static.app domain included, No credit card"
            />
            <PricingCardItems
                Plan="Monthly Plan"
                money="$12/month"
                isButton="Proceed Monthly"
                cardtitle="Free static.app domain included, No credit card"
            />
        </div>
    )
}

export default PricingCardMain