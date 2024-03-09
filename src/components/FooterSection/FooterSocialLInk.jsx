import React from 'react'

function FooterSocialLInk({ footerImage }) {
    return (
        <a href="#">
            <img src={footerImage} alt="SocialLink" className='w-[40px] h-[40px] bg-[white] rounded-full p-2 inline-blck hover:bg-[#16a34a]' />
        </a>
    )

}
export default FooterSocialLInk