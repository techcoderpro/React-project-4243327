import React from 'react';
import banner from '../../Assets/banner.png';
function HeroImage() {
    return (
        <div className=' w-full md:w-[50%] lg:w-[50%] flex justify-center md:justify-end mt-16 lg:mt-0'>
            <img src={banner} alt="HeroImage w-full" className='truncate h-[400px]' />
        </div>
    )
}

export default HeroImage