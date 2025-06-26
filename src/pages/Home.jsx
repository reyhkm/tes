import React from "react";
import HeroBanner from "../components/HeroBanner";
import CarCard from "../components/CarCard";

function Home() {
  const cars = [
    { id: 1, name: "2022 Porsche GT3 RS", price: 16000000000, image: "/src/assets/car1.jpg" },
    { id: 2, name: "2021 Ferrari SF90 Stradale", price: 17000000000, image: "/src/assets/Ferarri.jpg" },
    { id: 3, name: "2025 BMW M4 Competition xDrive Coupe", price: 2200000000, image: "/src/assets/mobil3.jpg" },
  ];

  return (
    <div>
      {/* Menampilkan HeroBanner di bagian atas */}
      <HeroBanner />
      
      {/* Menampilkan daftar mobil dalam bentuk grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default Home;
