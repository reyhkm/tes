import React from 'react';
import { Link } from 'react-router-dom';

function CarCard({ car }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-4">{car.name}</h2>
      <p className="text-gray-600">Harga: Rp{car.price.toLocaleString()}</p>
      {/* Menggunakan Link dinamis */}
      <Link to={`/details/${car.name.toLowerCase().replace(" ", "-")}`}>
        <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-700">
          Lihat Detail
        </button>
      </Link>
    </div>
  );
}

export default CarCard;
