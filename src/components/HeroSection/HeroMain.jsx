import React from 'react'
import HeroText from './HeroText'
import HeroImage from './HeroImage';

function HeroMain() {
    return (
        <div id='home' className='w-[90%] mx-auto md:flex lg:flex justify-between items-center'>
            <HeroText />
            <HeroImage />
        </div>
    )
}

export default HeroMain