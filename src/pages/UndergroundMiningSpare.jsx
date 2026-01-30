import React from 'react';
import ProductGallery from '../components/ProductGallery';

import img1 from '../assets/products/underground_mining_spare/mining_safety_equipment__x27_s_1.webp';
import img2 from '../assets/products/underground_mining_spare/mining_electrical_spare_2.png';
import img3 from '../assets/products/underground_mining_spare/mining_safety_equipment__x27_s_3.png';
import img4 from '../assets/products/underground_mining_spare/mining_mechanical_spare_4.jpg';
import img5 from '../assets/products/underground_mining_spare/consumable_product_5.webp';
import img6 from '../assets/products/underground_mining_spare/mining_mechanical_spare_6.webp';


const UndergroundMiningSpare = () => {
  const products = [
    { title: "Mining Safety Equipment's", description: "All Type of Mining Safety Equipment's", img: img1 },
    { title: "Mining Electrical Spare", description:`All type of Electrical Spare ( Schneider, BCH, ABB, Etc.)`,img: img2 },
    { title: "Mining Mechanical Spare", description:`All type of Mechanical Spare ( Gearbox, Fabrication Spare) `, img: img4 },
    { title: "Consumable Product", description:`All type of Consumable Brands ( CRC, Loctite, Pidilite, etc.)`, img: img5 },
  ];

  return (
    <ProductGallery 
      title="UNDERGROUND MINING SPARES" 
      products={products} 
    />
  );
};

export default UndergroundMiningSpare;
