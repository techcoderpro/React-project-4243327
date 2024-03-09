import React from 'react'
import FooterContentLeft from './FooterContentLeft'
import FooterContentRignt from './FooterContentRignt'

// import facebook from '../../Assets/facebook .svg'
// import instragram from '../../Assets/instragram.svg'
// import twitter from '../../Assets/twitter.svg'
// import youtube from '../../Assets/youtube.svg'

function FooterMain() {
    return (
        <div className='w-[90%] lg:flex justify-between mx-auto'>
            <FooterContentLeft />
            < FooterContentRignt />

            {/* <FooterLeft
                socialLink={facebook}
            /> */}

        </div>
    )
}

export default FooterMain