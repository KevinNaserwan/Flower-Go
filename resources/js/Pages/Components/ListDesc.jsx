import { Transition } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

export default function ListDesc({ name, desc }) {
    // Set initial state based on the name prop
    const [show, setShow] = useState(name === 'Description');

    const handleShow = (e) => {
        e.preventDefault();
        setShow(!show);
    };

    return (
        <div className='w-[300px] mx-auto'>
            <div className='flex items-center justify-between mt-4 mb-3'>
                <h1 className='font-normal text-lg'>{name}</h1>
                <Link onClick={handleShow}>
                    <img src={`${show ? "icon/min.svg" : "icon/add.svg"}`} alt="" />
                </Link>
            </div>
            <Transition
                show={show}
                enter="transition-opacity duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <p className={`${show ? 'block' : 'hidden'} font-normal text-base mt-4 mb-3`}>{desc}</p>
            </Transition>
            <div className='h-[1px] bg-black'></div>
        </div>
    );
}
