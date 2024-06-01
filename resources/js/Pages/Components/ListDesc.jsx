import { Link } from '@inertiajs/react'
import React from 'react'



export default function ListDesc({ name, desc }) {
    return (
        <div>
            <div className=' flex w-[300px] items-center justify-between mt-4 mb-3 '>
                <h1 className=' font-normal text-lg'>{name}</h1>
                <Link>
                    <img src="icon/add.svg" alt="" /></Link>
            </div>
            {/* <p className=' font-normal text-base w-[300px] mt-4 mb-3 '>{desc}</p> */}
            <div className=' h-[1px] bg-black w-[300px]'></div>
        </div>
    )
}