import React from 'react';
import ProductGallery from '../components/ProductGallery';

import img1 from '../assets/products/window_glass/jumbo_vehicle_glass_1.png';


const WindowGlass = () => {
  const products = [
    { title: "JUMBO VEHICLE GLASS", img: img1 , description:`Laminated glass for mining Jumbo vehicles is a durable, safety-focused material designed to withstand harsh mining conditions. It prevents shattering on impact, ensuring operator safety while maintaining clear visibility. It is ideal for protecting cabins and equipment and resists vibrations, debris, and temperature extremes.`}
  ];

  return (
    <ProductGallery 
      title="MINING VEHICLE WINDOW GLASS" 
      products={products} 
    />
  );
};

export default WindowGlass;
