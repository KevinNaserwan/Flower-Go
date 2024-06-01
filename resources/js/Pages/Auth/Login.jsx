import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import { Link } from '@inertiajs/react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='lg:w-[400px] w-[300px]'>
                <h1 className='text-2xl font-semibold mb-6'>Login</h1>
                <form onSubmit={submit} className='flex flex-col gap-4'>
                    <input
                        type="email"
                        placeholder='Email'
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className='py-2 px-4 border border-gray-300 rounded-md'
                    />
                    {errors.email && <InputError message={errors.email} />}
                    <input
                        type="password"
                        placeholder='Password'
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className='py-2 px-4 border border-gray-300 rounded-md'
                    />
                    {errors.password && <InputError message={errors.password} />}
                    <button
                        type="submit"
                        className='bg-black text-white py-2 rounded-md'
                        disabled={processing}
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Don't have an account? <Link href="/register" className="text-blue-500">Register here</Link>
                </p>
            </div>
        </div>
    );
}
