import React from "react";
import { Link } from "react-router-dom"; // Mengimpor Link

function HeroBanner() {
  return (
    <section className="relative bg-blue-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold">Temukan Mobil Impian Anda</h1>
        <p className="text-xl mt-4">Harga terbaik untuk semua jenis mobil</p>
        {/* Menggunakan Link di tombol */}
        <Link to="/home">
          <button className="bg-blue-600 px-6 py-3 rounded-lg mt-6 hover:bg-blue-700">
            Mulai Belanja
          </button>
        </Link>
      </div>
    </section>
  );
}

export default HeroBanner;
