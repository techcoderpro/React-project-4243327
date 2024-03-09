import React from 'react'
import TestimonialsHeader from './TestimonialsHeader'
import ClientsItems from './ClientsItems'

function TestimonialsMain() {
    return (
        <div id='testimonials' className='w-[90%] mx-auto'>
            <TestimonialsHeader />
            <ClientsItems />
        </div>
    )
}

export default TestimonialsMain