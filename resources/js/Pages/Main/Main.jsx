import React from 'react'
import Header from '../Components/Header'



export default function main() {
    return (
        <>
            <div className=' lg:container w-[330px] mx-auto lg:py-10 pt-6 pb-3 relative z-20 overflow-hidden'>
                <Header />
            </div>
            <div className='absolute z-10 lg:block hidden bottom-0 lg:w-[150px] w-[75px]'>
                <img src="images/bg-img1.svg" width={150} alt="" />
            </div>
            <div className=' absolute z-10 right-0 top-24 lg:w-[140px] w-[90px]'>
                <img src="images/bg-img2.svg" width={180} alt="" />
            </div>
        </>
    )
}