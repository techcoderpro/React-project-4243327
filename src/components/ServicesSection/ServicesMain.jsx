import React from 'react'
import ServiceLeftText from './ServiceLeftText'
import ServiceRightCard from './ServiceRightCard'
function ServicesMain() {
    return (
        <div id='services' className='w-[90%] mx-auto lg:flex justify-between items-center'>
            <ServiceLeftText />
            <ServiceRightCard />
        </div>
    )
}

export default ServicesMain