import React from 'react';
import ProductGallery from '../components/ProductGallery';

import img1 from '../assets/products/fire_product/heat_insulator_1.png';
import img2 from '../assets/products/fire_product/welding_blanket_2.png';
import img3 from '../assets/products/fire_product/fire_blanket_3.png';
import img4 from '../assets/products/fire_product/welding_blanket_4.png';
import img5 from '../assets/products/fire_product/heat_insulator_5.png';
import img6 from '../assets/products/fire_product/welding_blanket_6.png';
import img7 from '../assets/products/fire_product/aluminum_adhesive_tape_7.png';
import img8 from '../assets/products/fire_product/aluminum_adhesive_tape_8.png';
import img9 from '../assets/products/fire_product/fire_proximity_suite_9.png';
import img10 from '../assets/products/fire_product/aluminum_adhesive_tape_10.png';


const FireProduct = () => {
  const products = [
    { title: "Heat Insulator", img: img1, description: `Size: 3mm to 100mm
Standard Packing: 1kg | 5kg
Temprature: Minimum : - 200 C , Maximum : + 280C
pH: 0-14` },
    { title: "Fire Blanket", img: img3, description: `Fiberglass Is Widely Used In Various Applications Like Mats, Thermal Insulation, Electrical Insulation.`},
    { title: "Welding Blanket", img: img6 , description: `1. This Fabric Has Very High Vermiculite Content (10 To 12%).
2. Used At 2300°F / 1260°C Connuously, Molts Above 3000°F / 1650°C.`},
    { title: "Aluminum Adhesive Tape", img: img8, description: `Excellent flame retardant, heat and cold insulation, waterproofness, chemical resistance, weather resistance, and UV degradation resistance.` },
    { title: "Fire Proximity Suite", img: img9, description: `It Will Withstand Radiant Heat Of 600 C To 800 C.` },
  ];

  return (
    <ProductGallery 
      title="FIRE PROTECTION PRODUCTS" 
      products={products} 
    />
  );
};

export default FireProduct;
