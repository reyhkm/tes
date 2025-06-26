import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleCreateAccount = async (e) => {
        e.preventDefault();
    
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const passwordConfirmation = e.target.password_confirmation.value;
    
        if (password !== passwordConfirmation) {
            setError('Password dan konfirmasi tidak cocok!');
            return;
        }
    
        // Kirim data ke backend untuk membuat akun
        try {
            const response = await fetch('http://localhost:3001/api/createaccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,  // Ambil data dari form
                    email,
                    password,
                    confirmPassword: passwordConfirmation // Pastikan field konfirmasi password ada
                }),
            });
    
            if (!response.ok) {
                throw new Error('Terjadi kesalahan saat membuat akun');
            }
    
            const data = await response.json();
            console.log('Akun berhasil dibuat:', data);
            navigate('/login'); // Redirect ke halaman login setelah berhasil
        } catch (error) {
            setError(error.message);
        }
    };
    

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl text-center">Buat akun baru</h2>

                <div className="relative max-w-md mx-auto mt-8 md:mt-16">
                    <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                        <div className="px-6 py-8 sm:px-8 sm:py-10">
                            <form onSubmit={handleCreateAccount}>
                                <div className="space-y-5">
                                    <div>
                                        <label className="text-base font-medium text-gray-900">Nama Lengkap</label>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="Masukkan nama lengkap Anda"
                                            className="block w-full px-4 py-3 mt-2 text-black placeholder-gray-500 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-base font-medium text-gray-900">Alamat Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Masukkan email"
                                            className="block w-full px-4 py-3 mt-2 text-black placeholder-gray-500 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-base font-medium text-gray-900">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Masukkan password"
                                            className="block w-full px-4 py-3 mt-2 text-black placeholder-gray-500 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-base font-medium text-gray-900">Konfirmasi Password</label>
                                        <input
                                            type="password"
                                            name="password_confirmation"
                                            placeholder="Konfirmasi password"
                                            className="block w-full px-4 py-3 mt-2 text-black placeholder-gray-500 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full py-3 text-base font-semibold text-white bg-blue-600 rounded-md focus:outline-none hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                                        >
                                            Buat Akun
                                        </button>
                                    </div>

                                    <div className="text-center mt-4">
                                        Sudah punya akun? 
                                        <a href="/login" className="text-blue-500 hover:text-blue-700">Login</a>
                                    </div>

                                    {error && <p className="mt-4 text-center text-red-500">{error}</p>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateAccount;
