import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        get(route('logout'));
    };

    return (
        <>
            <div className='flex items-center justify-between'>
                <h1 className='font-normal lg:text-[30px] text-lg'>Flower Go</h1>
                <div className='lg:flex items-center gap-10 hidden'>
                    <Link href='/'>Home</Link>
                    <Link href=''>Contact</Link>
                </div>
                <div className='flex items-center gap-5 relative'>
                    <Link>
                        <img src="icon/Heart.svg" alt="Favorites" />
                    </Link>
                    <div className="relative mt-2">
                        <button onClick={toggleDropdown}>
                            <img src="icon/Profile.svg" alt="Profile" />
                        </button>
                        {showDropdown && (
                            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-48 py-2 z-10">
                                <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</Link>
                                <a href='logout' onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
                            </div>
                        )}
                    </div>
                    <Link>
                        <img src="icon/Buy.svg" alt="Cart" />
                    </Link>
                </div>
            </div>
        </>
    )
}
