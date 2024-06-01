import React from 'react'
import Navbar from './Navbar'
import { Link } from '@inertiajs/react'
import ListDesc from './ListDesc'



export default function Header() {
    return (
        <div className=''>
            <Navbar />
            <div className=' lg:flex lg:my-16 my-8 items-center justify-center gap-12'>
                <div className=' lg:flex items-center gap-12 lg:flex-row-reverse lg:w-full justify-center w-[320px] mx-auto'>
                    <div>
                        <img src="images/flower-main.svg" className=' lg:w-[300px] w-[200px] mx-auto' width={300} alt="" />
                        <div className='flex lg:hidden gap-6 mt-5 justify-end'>
                            <img src="icon/bi_arrow-right.svg" alt="" />
                            <img src="icon/bi_arrow-left.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className=' lg:w-[460px] pb-10 lg:mt-0 mt-6 '>
                            <h1 className=' font-semibold lg:text-6xl text-xl'>Minimal red tulip flower vase.
                            </h1>
                            <p className=' font-normal lg:text-5xl text-lg lg:py-8 py-2'>$18.99</p>
                            <p className=' font-normal text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat quis imperdiet sodales.</p>
                        </div>
                        <div className=' flex items-center w-[200px]  justify-between'>
                            <div>
                                <a href="" className=' bg-black py-4 px-6  text-white lg:text-base text-sm hover:bg-black/80 font-medium rounded-full'>Add To Cart</a>
                            </div>
                            <Link>
                                <img src="icon/Heart.svg" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='lg:mt-0 mt-10 '>
                    <div className=' lg:flex hidden gap-6  mb-64'>
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