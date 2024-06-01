import { Link } from '@inertiajs/react'
import React from 'react'



export default function ListDesc({ name, desc }) {
    return (
        <div className=' w-[300px] mx-auto'>
            <div className=' flex  items-center justify-between mt-4 mb-3 '>
                <h1 className=' font-normal text-lg'>{name}</h1>
                <Link>
                    <img src="icon/add.svg" alt="" /></Link>
            </div>
            {/* <p className=' font-normal text-base  mt-4 mb-3 '>{desc}</p> */}
            <div className=' h-[1px] bg-black '></div>
        </div>
    )
}