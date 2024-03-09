import React from 'react'

function FooterRightItems({ itemsHead, isHome, Services, Testimonials, isPricing, isContact }) {
    return (
        <div className='mt-9'>
            <h4 className='text-2xl text-white'>{itemsHead}</h4>
            <ul>
                <li className="mt-3 "><a href="#" className=' text-xl font-medium text-[#cbd5e1] hover:text-[#86ef96] capitalize hover:underline hover:underline-offset-8'>{isHome}</a></li>
            </ul>
            <ul>
                <li className="mt-3"><a href="#" className=' text-xl font-medium text-[#cbd5e1] hover:text-[#86ef96] capitalize hover:underline hover:underline-offset-8'>{Services}</a></li>
            </ul>
            <ul>
                <li className="mt-3"><a href="#" className=' text-xl font-medium text-[#cbd5e1] hover:text-[#86ef96] capitalize hover:underline hover:underline-offset-8'>{Testimonials}</a></li>
            </ul>
            <ul>
                <li className="mt-3"><a href="#" className=' text-xl font-medium text-[#cbd5e1] hover:text-[#86ef96] capitalize hover:underline hover:underline-offset-8'>{isPricing}</a></li>
            </ul>
            <ul>
                <li className="mt-3"><a href="#" className=' text-xl font-medium text-[#cbd5e1] hover:text-[#86ef96] capitalize hover:underline hover:underline-offset-8'>{isContact}</a></li>
            </ul>
        </div>
    )
}

export default FooterRightItems