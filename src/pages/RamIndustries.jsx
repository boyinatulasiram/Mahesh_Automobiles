import React from 'react';
import ProductGallery from '../components/ProductGallery';

import img1 from '../assets/products/ram_industries/shaft_mounted_speed_reducer__smsr__1.png';
import img2 from '../assets/products/ram_industries/gear_motors_2.png';
import img3 from '../assets/products/ram_industries/shaft_mounted_speed_reducer__smsr__3.png';
import img4 from '../assets/products/ram_industries/parallel_shaft_helical_gearbox_4.png';
import img5 from '../assets/products/ram_industries/shaft_mounted_speed_reducer__smsr__5.png';
import img6 from '../assets/products/ram_industries/helical_gearbox_for_extruder_6.png';
import img7 from '../assets/products/ram_industries/parallel_shaft_helical_gearbox_7.png';
import img8 from '../assets/products/ram_industries/rod_construction_gearbox_8.png';
import img9 from '../assets/products/ram_industries/helical_gearbox_for_extruder_9.png';
import img10 from '../assets/products/ram_industries/worm_gearbox_10.png';
import img11 from '../assets/products/ram_industries/helical_gearbox_for_extruder_11.png';
import img12 from '../assets/products/ram_industries/rod_construction_gearbox_12.png';
import img13 from '../assets/products/ram_industries/custom_made_gearbox__special_gearbox_13.png';
import img14 from '../assets/products/ram_industries/loose_gearbox_and_shaft_14.png';
import img15 from '../assets/products/ram_industries/custom_made_gearbox__special_gearbox_15.png';


const RamIndustries = () => {
  const products = [
    { title: "Shaft Mounted Speed Reducer (SMSR)", img: img1 },
    { title: "Gear Motors", img: img2 },
    { title: "Parallel Shaft Helical GearBox", img: img4 },
    { title: "Helical GearBox for Extruder", img: img6 },
    { title: "Rod Construction GearBox", img: img8 },
    { title: "Worm GearBox", img: img10 },
    { title: "Custom Made GearBox/ Special GearBox", img: img13 },
    { title: "Loose GearBox and Shaft", img: img14 },
  ];

  return (
    <ProductGallery 
      title="Driven Technology" 
      products={products} 
    />
  );
};

export default RamIndustries;
