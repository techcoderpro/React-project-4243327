import React from 'react'
import ContactInfoInner from './ContactInfoInner'
import phone from '../../Assets/phone.svg'
import email from '../../Assets/email.svg'
import address from '../../Assets/address.svg'
import ContactSocial from './ContactSocial'
// import facebook from '../../Assets/facebook'
function ContactInfo() {
    return (
        <div className='w-full lg:w-[50%] md:w-[50%]'>
            <ContactInfoInner
                contHeader="Contact Info"
                contcatIcon={phone}
                contactTitle="+91 879 090 3780"
            />
            <ContactInfoInner
                contcatIcon={email}
                contactTitle="contact@yourmail.com"
            />
            <ContactInfoInner
                contcatIcon={address}
                contactTitle="203, Envato Labs, Behind Alis Street, Australia"
            />

            <ContactSocial
            // socialIcons={facebook}
            />
        </div>

    )
}

export default ContactInfo