import React from 'react'
import ContactInfo from './ContactInfo'
import ContactInput from './ContactInput'
function ContactMain() {
    return (
        <div id='contact' className='w-[90%] lg:w-[70%] mx-auto md:flex lg:flex justify-between lg:items-center py-9 lg:py-16 px-8 rounded-lg bg-white  z-20'>
            <ContactInfo
            />
            <ContactInput />
        </div>
    )
}

export default ContactMain