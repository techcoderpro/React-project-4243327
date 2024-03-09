import React from 'react'
import facebook from '../../Assets/facebook .svg'
import instragram from '../../Assets/instragram.svg'
import twitter from '../../Assets/twitter.svg'
import youtube from '../../Assets/youtube.svg'
// contactSocial, isAdd
function ContactSocial(socialIcons) {
    return (
        <div className='flex mt-9'>
            <a href="#">
                <img src={instragram} alt="Social image" className='w-[44px] h-[44px] p-2 rounded-full bg-[#4ade80] hover:bg-[#16a34a]' />
            </a>
            <a href="#">
                <img src={instragram} alt="Social image" className='w-[44px] h-[44px] p-2 rounded-full bg-[#4ade80] hover:bg-[#16a34a] ml-4' />
            </a>
            <a href="#">
                <img src={twitter} alt="Social image" className='w-[44px] h-[44px] p-2 rounded-full bg-[#4ade80] hover:bg-[#16a34a] ml-4' />
            </a>
            <a href="#">
                <img src={youtube} alt="Social image" className='w-[44px] h-[44px] p-2 rounded-full bg-[#4ade80] hover:bg-[#16a34a] ml-4' />
            </a>
            {/* <div>
                <a href="#">
                    <img src={facebook} alt="Social image" className='w-[40px] h-[40px] p-2 rounded-full bg-[#4ade80] inline-block' />
                </a>
            </div> */}
            {/* <p>{isAdd}</p> */}
        </div>
    )
}

export default ContactSocial