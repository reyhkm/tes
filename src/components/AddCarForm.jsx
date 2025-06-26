import React, { useState } from "react";

function AddCarForm({ addCar }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addCar({ name, price: Number(price), year: Number(year) });
    setName("");
    setPrice("");
    setYear("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 shadow-md rounded-lg mt-6 max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Tambah Mobil</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Nama Mobil</label>
        <input
          type="text"
          className="w-full border-gray-300 rounded-md shadow-sm p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Harga</label>
        <input
          type="number"
          className="w-full border-gray-300 rounded-md shadow-sm p-2"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Tahun</label>
        <input
          type="number"
          className="w-full border-gray-300 rounded-md shadow-sm p-2"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Tambah Mobil
      </button>
    </form>
  );
}

export default AddCarForm;
