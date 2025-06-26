import React, { useState, useEffect } from 'react';

const UpdateAccount = () => {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState(null);  // Menyimpan ID pengguna yang dipilih

    useEffect(() => {
        // Mengambil data pengguna dari server saat komponen dimuat
        fetch('http://localhost:3001/api/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleUpdate = (id) => {
        const token = localStorage.getItem('token'); // Ambil token dari localStorage jika diperlukan

        if (!token) {
            alert('Token tidak ditemukan! Anda harus login terlebih dahulu.');
            return;
        }

        if (!email || !password) {
            alert('Email dan password harus diisi!');
            return;
        }

        fetch(`http://localhost:3001/api/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Menambahkan token di header
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                // Menyaring dan memperbarui data pengguna setelah berhasil diperbarui
                setUsers(users.map(user => 
                    user.id === id ? { ...user, email, password } : user
                ));
            })
            .catch(error => console.error('Error updating user:', error));
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Perbarui Akun Pengguna</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Perbarui informasi akun Anda seperti email dan password melalui form berikut.</p>
                </div>
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-full">
                        <div className="h-full flex flex-col items-center border-gray-200 border p-4 rounded-lg">
                            <ul className="w-full">
                                {users.map(user => (
                                    <li key={user.id} className="flex items-center justify-between p-4 border-b">
                                        <div className="text-gray-900 font-medium">{user.username} - {user.email}</div>
                                        <button 
                                            onClick={() => {
                                                setUserId(user.id);
                                                setEmail(user.email);  // Menampilkan email pengguna yang ingin diperbarui
                                            }}
                                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                        >
                                            Perbarui
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {userId && (
                        <div className="p-2 w-full">
                            <div className="h-full flex flex-col items-center border-gray-200 border p-4 rounded-lg">
                                <h2 className="text-xl font-medium text-gray-900 mb-4">Perbarui Email dan Password</h2>
                                <form onSubmit={(e) => { e.preventDefault(); handleUpdate(userId); }} className="w-full space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900">Email Baru</label>
                                        <input 
                                            type="email" 
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)} 
                                            placeholder="Masukkan email baru"
                                            className="w-full px-4 py-3 mt-2 text-black placeholder-gray-500 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900">Password Baru</label>
                                        <input 
                                            type="password" 
                                            value={password} 
                                            onChange={(e) => setPassword(e.target.value)} 
                                            placeholder="Masukkan password baru"
                                            className="w-full px-4 py-3 mt-2 text-black placeholder-gray-500 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        />
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="w-full py-3 text-base font-semibold text-white bg-blue-600 rounded-md focus:outline-none hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                                    >
                                        Perbarui
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default UpdateAccount;
