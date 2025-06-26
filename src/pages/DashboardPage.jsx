import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // Redirect to login page if not authenticated
        }

        const fetchItems = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/dashboard', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch items');
                }
                const data = await response.json();
                setItems(data);
            } catch (error) {
                setError('Failed to load items');
                console.error(error);
            }
        };

        fetchItems();
    }, [navigate]);

    const handleAddItem = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch('http://localhost:3001/api/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ name: newItem }),
            });

            if (!response.ok) {
                throw new Error('Failed to add item');
            }

            const newItemData = await response.json();
            setItems([...items, newItemData]);
            setNewItem('');
        } catch (error) {
            setError('Failed to add item');
            console.error(error);
        }
    };

    const handleDeleteItem = async (id) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:3001/api/items/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete item');
            }

            setItems(items.filter(item => item.id !== id));
        } catch (error) {
            setError('Failed to delete item');
            console.error(error);
        }
    };

    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side: CRUD Operations */}
                <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                            Dashboard
                        </h2>
                        {error && <p className="mt-2 text-base text-red-600">{error}</p>}

                        <div className="mt-8">
                            <input
                                type="text"
                                value={newItem}
                                onChange={(e) => setNewItem(e.target.value)}
                                placeholder="Add new item"
                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                            />
                            <button
                                onClick={handleAddItem}
                                className="mt-4 inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700"
                            >
                                Add Item
                            </button>

                            <ul className="mt-4 space-y-3">
                                {items.map(item => (
                                    <li key={item.id} className="flex justify-between items-center">
                                        <span>{item.name}</span>
                                        <button
                                            onClick={() => handleDeleteItem(item.id)}
                                            className="text-red-600 hover:text-red-700"
                                        >
                                            Delete
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Side: Design or Content */}
                <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
                    <div>
                        <img
                            className="w-full mx-auto"
                            src="src/assets/logo4.jpg"
                            alt="Logo"
                        />
                        <div className="w-full max-w-md mx-auto xl:max-w-xl">
                            <h3 className="text-2xl font-bold text-center text-black">
                                Manage Your Data
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardPage;
