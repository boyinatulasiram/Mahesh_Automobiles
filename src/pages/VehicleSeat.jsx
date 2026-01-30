import React from 'react';
import ProductGallery from '../components/ProductGallery';

import img1 from '../assets/products/vehicle_seat/operator_seats_with_suspension_1.jpeg';
import img2 from '../assets/products/vehicle_seat/operator_seats_with_electrical_air_suspension_2.jpeg';
import img3 from '../assets/products/vehicle_seat/operator_seats_with_electrical_air_suspension_3.png';
import img4 from '../assets/products/vehicle_seat/passenger_seats_4.webp';
import img5 from '../assets/products/vehicle_seat/operator_seats_with_electrical_air_suspension_5.webp';


const VehicleSeat = () => {
  const products = [
    { title: "OPERATOR SEATS WITH SUSPENSION", img: img1, description: `Designed for rugged underground conditions, these seats offer durability, ergonomic support, and operator safety. Features include adjustable cushioning, vibration damping, and robust construction to withstand heavy use. Often equipped with integrated controls, seat belts, and lumbar support, they ensure comfort and efficiency during prolonged mining operations.` },
    { title: "OPERATOR SEATS WITH ELECTRICAL AIR SUSPENSION", img: img2, description: `These seats are designed for enhanced comfort and safety in demanding environments like underground mining. The electrical air suspension system provides automatic height adjustment, superior vibration damping, and customized support, ensuring reduced operator fatigue. Features often include ergonomic cushioning, adjustable armrests, lumbar support, and integrated controls for easy operation. Built for durability, they withstand harsh conditions while maintaining optimal operator comfort.` },
    { title: "PASSENGER SEATS", img: img4, description: `Passenger seats in mining vehicles are built for durability and safety, designed to endure harsh mining conditions. They feature sturdy construction, ergonomic cushioning, and seat belts for safety during transit. Optional features include vibration resistance, adjustable settings, and weatherproof materials to enhance comfort and usability in rugged environments.` },
  ];

  return (
    <ProductGallery 
      title="MINING VEHICLE SEATS" 
      products={products} 
    />
  );
};

export default VehicleSeat;
