import React from 'react'
import Navbar from './Navbar'
import { Link } from '@inertiajs/react'
import ListDesc from './ListDesc'



export default function Header() {
    return (
        <div className=''>
            <Navbar />
            <div className=' lg:flex my-16 items-center justify-center gap-12'>
                <div>
                    <div className=' lg:w-[460px] pb-10 '>
                        <h1 className=' font-semibold text-6xl'>Minimal red tulip flower vase.
                        </h1>
                        <p className=' font-normal text-5xl py-8'>$18.99</p>
                        <p className=' font-normal text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat quis imperdiet sodales.</p>
                    </div>
                    <div className=' flex items-center w-[200px]  justify-between'>
                        <div>
                            <a href="" className=' bg-black py-4 px-6 text-white hover:bg-black/80 font-medium rounded-full'>Add To Cart</a>
                        </div>
                        <Link>
                            <img src="icon/Heart.svg" alt="" />
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="images/flower-main.svg" width={300} alt="" />
                </div>
                <div>
                    <div className=' flex gap-6 mb-72'>
                        <img src="icon/bi_arrow-right.svg" alt="" />
                        <img src="icon/bi_arrow-left.svg" alt="" />
                    </div>
                    <div className=''>
                        <ListDesc name={"Description"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat quis imperdiet sodales egestas. Neque suspendisse sed accumsan, molestie aliquet."} />
                        <ListDesc name={"Ingredients"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat quis imperdiet sodales egestas. Neque suspendisse sed accumsan, molestie aliquet."} />
                        <ListDesc name={"Testimonial"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat quis imperdiet sodales egestas. Neque suspendisse sed accumsan, molestie aliquet."} />
                    </div>
                </div>
            </div>
        </div>
    )
}