import React from 'react'

function ServiceLeftText() {
    return (
        <div className='w-full lg:w-[50%] mb-14 lg:mb-0'>
            <h2 className=' text-[#28B463] font-bold text-4xl text-center md:text-left md:text-5xl lg:text-left lg:text-6xl leading-[50px] lg:leading-[70px] mb-7'>Hosting solution with benefits.</h2>
            <p className='text-black font-normal text-xl text-center md:text-left md:text-2xl lg:text-left lg:text-2xl lg:pr-7'>Turn your ideas into reality with Static. With a lot of powerful features, we guarantee simplicity and clarity.</p>
            <div className='mt-9 text-center md:text-start lg:text-start'>
                <button className='text-xl text-white bg-[#28B463] lg:py-3 py-2 lg:px-6 px-3 capitalize rounded-md hover:bg-black hover:transition-all'>
                    Read more
                </button>
            </div>
        </div>
    )
}

export default ServiceLeftText