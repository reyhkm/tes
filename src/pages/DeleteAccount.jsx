import React, { useState, useEffect } from 'react';

const DeleteAccount = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Mengambil data pengguna dari server saat komponen dimuat
        fetch('http://localhost:3001/api/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleDelete = (userId) => {
        const token = localStorage.getItem('token'); // Ambil token dari localStorage jika diperlukan

        if (!token) {
            alert('Token tidak ditemukan! Anda harus login terlebih dahulu.');
            return;
        }

        fetch(`http://localhost:3001/api/users/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Menambahkan token di header
            }
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                setUsers(users.filter(user => user.id !== userId)); // Menghapus pengguna dari UI setelah berhasil dihapus
            })
            .catch(error => console.error('Error deleting user:', error));
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                    <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Daftar Pengguna</h1>
                </div>

                <div className="flex flex-wrap -m-2 mt-6">
                    <div className="p-2 w-full">
                        <div className="h-full flex flex-col items-center border-gray-200 border p-4 rounded-lg">
                            <ul className="w-full">
                                {users.map(user => (
                                    <li key={user.id} className="flex items-center justify-between p-4 border-b">
                                        <div className="text-gray-900 font-medium">{user.username} - {user.email}</div>
                                        <button 
                                            onClick={() => handleDelete(user.id)} 
                                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                                        >
                                            Hapus
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeleteAccount;
