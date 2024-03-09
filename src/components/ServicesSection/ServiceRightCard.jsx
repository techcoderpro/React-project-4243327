import React from 'react'
import cardOne from '../../Assets/cardOne.svg'
// import cardTwo from '../../Assets/cardTwo.svg'
// import cardThree from '../../Assets/cardThree.svg'
// import cardFour from '../../Assets/cardFour.svg'
import CardItems from './CardItems'

function ServiceRightCard() {
    return (
        <div className='w-full flex lg:w-[50%] flex-wrap gap-5 lg:gap-3 xl:gap-5 justify-center text-center'>
            <CardItems
                icon={cardOne}
                isHeading="SSL Certificate"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            />
            <CardItems
                icon={cardOne}
                isHeading="Personal Domain"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            />
            <CardItems
                icon={cardOne}
                isHeading="Media Storage"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            />
            <CardItems
                icon={cardOne}
                isHeading="Code Editor"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            />
        </div>
    )
}

export default ServiceRightCard