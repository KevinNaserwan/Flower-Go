import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='lg:w-[400px] w-[300px]'>
                <h1 className='text-2xl font-semibold mb-6'>Register</h1>
                <form onSubmit={submit} className='flex flex-col gap-4'>
                    <input
                        type="text"
                        placeholder='Name'
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className='py-2 px-4 border border-gray-300 rounded-md'
                    />
                    {errors.name && <div className="text-red-500">{errors.name}</div>}
                    <input
                        type="email"
                        placeholder='Email'
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className='py-2 px-4 border border-gray-300 rounded-md'
                    />
                    {errors.email && <div className="text-red-500">{errors.email}</div>}
                    <input
                        type="password"
                        placeholder='Password'
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className='py-2 px-4 border border-gray-300 rounded-md'
                    />
                    {errors.password && <div className="text-red-500">{errors.password}</div>}
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        className='py-2 px-4 border border-gray-300 rounded-md'
                    />
                    {errors.password_confirmation && <div className="text-red-500">{errors.password_confirmation}</div>}
                    <button
                        type="submit"
                        className='bg-black text-white py-2 rounded-md'
                        disabled={processing}
                    >
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Already have an account? <Link href="/login" className="text-blue-500">Login here</Link>
                </p>
            </div>
        </div>
    );
}
