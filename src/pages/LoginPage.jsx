import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();  // Use useNavigate for programmatic navigation

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
    
            if (!response.ok) {
                throw new Error('Login gagal');
            }
    
            const data = await response.json();
    
            // Menyimpan data pengguna di localStorage
            localStorage.setItem('userId', data.user.id);
            localStorage.setItem('userEmail', data.user.email);
    
            // Redirect atau lakukan hal lain setelah login berhasil
            // Misalnya:
            window.location.href = '/update'; // Ganti dengan halaman update akun
        } catch (error) {
            setError(error.message);
        }
    };    

    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side: Sign In Form */}
                <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                            Login
                        </h2>
                        {error && <p className="mt-2 text-base text-red-600">{error}</p>}
                        <p className="mt-2 text-base text-gray-600">
                            Don’t have an account?{' '}
                            <a
                                href="/createaccount"
                                title="Create Account"
                                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
                            >
                                Create a free account
                            </a>
                        </p>

                        <form onSubmit={handleLogin} method="POST" className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="text-base font-medium text-gray-900"
                                    >
                                        Email address
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter email to get started"
                                            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="password"
                                            className="text-base font-medium text-gray-900"
                                        >
                                            Password
                                        </label>
                                        <a
                                            href="/update"
                                            title="Forgot Password"
                                            className="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700"
                                        >
                                            Ganti email atau password?
                                        </a>
                                    </div>
                                    <div className="mt-2.5">
                                        <input
                                            type="password"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter your password"
                                            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                                    >
                                        Log in
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Side: Design Your Own Card */}
                <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
                    <div>
                        <img
                            className="w-full mx-auto"
                            src="src/assets/logo4.jpg"
                            alt="Logo"
                        />
                        <div className="w-full max-w-md mx-auto xl:max-w-xl">
                            <h3 className="text-2xl font-bold text-center text-black">
                                Buy Your Dream Car
                            </h3>
                            <div className="flex items-center justify-center mt-10 space-x-3">
                                <div className="bg-blue-500 rounded-full w-20 h-1.5"></div>
                                <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>
                                <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
