import React from 'react'

function ContactInfoInner({ contHeader, contcatIcon, contactTitle }) {
    return (
        <div>
            <h3 className='font-bold text-4xl text-[#16a34a] capitalize mb-6 text-center md:text-left lg:text-left'>{contHeader}</h3>
            <div className='flex items-center mb-4'>
                <img src={contcatIcon} alt="cotact icon" className='w-[40px] h-[40px] p-2 rounded-full bg-[#4ade80] cursor-pointer' />
                <p className='ml-4 text-xl font-semibold text-[rgb(125,125,130)] pr-0 lg:pr-16'>{contactTitle}</p>
            </div>
        </div>
    )
}

export default ContactInfoInner