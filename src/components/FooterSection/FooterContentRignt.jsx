import React from 'react'
import FooterRightItems from './FooterRightItems'

function FooterContentRignt() {
    return (
        <div className='flex-wrap justify-between mb-7 lg:w-[55%] flex lg:flex-row lg:justify-around'>
            <FooterRightItems
                itemsHead="PAGES"
                isHome="home"
                Services="Services"
                Testimonials="Testimonials"
                isPricing="Pricing"
                isContact="Contact"
            />
            <FooterRightItems
                itemsHead="PAGES"
                isHome="home"
                Services="Services"
                Testimonials="Testimonials"
                isPricing="Pricing"
                isContact="Contact"
            />
            <FooterRightItems
                itemsHead="PAGES"
                isHome="home"
                Services="Services"
                Testimonials="Testimonials"
                isPricing="Pricing"
                isContact="Contact"
            />
        </div>
    )
}

export default FooterContentRignt