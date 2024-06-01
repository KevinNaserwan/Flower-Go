import { Link } from '@inertiajs/react'
import React from 'react'


export default function Navbar() {
    return (
        <>
            <div className=' flex items-center justify-between'>
                <h1 className=' font-normal lg:text-[30px] text-lg'>Flower Go</h1>
                <div className=' lg:flex items-center gap-10 hidden'>
                    <Link href='/'>Home</Link>
                    <Link href=''>Red Rose</Link>
                    <Link href=''>Lotus</Link>
                    <Link href=''>Jasmine</Link>
                    <Link href=''>Contact</Link>
                </div>
                <div className=' flex items-center gap-5'>
                    <Link>
                        <img src="icon/Heart.svg" alt="" />
                    </Link>
                    <Link>
                        <img src="icon/Profile.svg" alt="" />
                    </Link>
                    <Link>
                        <img src="icon/Buy.svg" alt="" />
                    </Link>
                </div>
            </div>
        </>
    )
}