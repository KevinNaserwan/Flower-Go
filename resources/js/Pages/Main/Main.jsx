import React from 'react'
import Header from '../Components/Header'



export default function main() {
    return (
        <>
            <div className=' lg:container w-[330px] mx-auto py-10 relative'>
                <Header />
            </div>
            <div className=' absolute z-10 bottom-0'>
                <img src="images/bg-img1.svg" width={150} alt="" />
            </div>
            <div className=' absolute z-10 right-0 top-32'>
                <img src="images/bg-img2.svg" width={180} alt="" />
            </div>
        </>
    )
}