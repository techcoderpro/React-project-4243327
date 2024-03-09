import React from 'react'

function CardItems({ icon, isHeading, description }) {
    return (
        <div className=' w-full md:w-[48%] py-8 px-5 lg:px-2 xl:px-5 bg-white rounded-lg text-center border-2 hover:border-2 hover:border-[#22c55e] transition-all cursor-pointer shadow-lg'>
            <div className='flex justify-center'>
                <img className=' rounded-full p-2 w-[60px] h-[60px] bg-[#4ade80] hover:bg-[#22c55e] hover:cursor-pointer' src={icon} alt="cardOne" />
            </div>
            <h3 className=' font-semibold text-[26px] lg:text-[22px] xl:text-[26px] text-[#16a34a] my-4'>{isHeading}</h3>
            <p className='text-xl lg:text-lg xl:text-xl font-normal px-2 mb-5'>{description}</p>
            <button className=' text-[16px] text-white bg-[#28B463] py-2 px-4 capitalize rounded-md hover:bg-black transition-all'>
                view more
            </button>
        </div>
    )
}

export default CardItems