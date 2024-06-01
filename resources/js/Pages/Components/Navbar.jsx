import { Link } from '@inertiajs/react'
import React from 'react'


export default function Navbar() {
    return (
        <>
            <div className=' flex items-center justify-between'>
                <h1 className=' font-normal text-[30px]'>Flower Go</h1>
                <div className=' flex items-center gap-10'>
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