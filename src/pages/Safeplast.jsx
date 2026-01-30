import React from 'react';
import ProductGallery from '../components/ProductGallery';

import img1 from '../assets/products/safeplast/safe_spiral_guard_1.png';
import img2 from '../assets/products/safeplast/safe__sleeve_2.png';
import img3 from '../assets/products/safeplast/safe_spiral_guard_3.png';
import img4 from '../assets/products/safeplast/safe__strap_belt_4.png';
import img5 from '../assets/products/safeplast/safe_spiral_guard_5.png';
import img6 from '../assets/products/safeplast/safe__fire_sleeve_6.png';
import img7 from '../assets/products/safeplast/safe__fire_sleeve_7.png';
import img8 from '../assets/products/safeplast/safe__sleeve_msha_8.png';
import img9 from '../assets/products/safeplast/safe__fire_sleeve_9.png';
import img10 from '../assets/products/safeplast/safe__wrap_10.png';
import img11 from '../assets/products/safeplast/safe__fire_sleeve_11.png';
import img12 from '../assets/products/safeplast/safe__sleeve_msha_12.png';
import img13 from '../assets/products/safeplast/safe__bundler_13.png';


const Safeplast = () => {
  const products = [
    { title: "Safe-Spiral Guard",description: "Complete range of Hose Protection Coil ", img: img1 },
    { title: "Safe- Sleeve", description: "Complete range of Safe Sleeve", img: img2 },
    { title: "Safe- Strap belt", description: "complete range of hose binding accessories.", img: img4 },
    { title: "Safe- Fire Sleeve", description: "complete range 0f Fire Sleeve", img: img7 },
    { title: "Safe- Sleeve MSHA", description: "complete range of MSHA Sleeve", img: img8 },
    { title: "Safe- Wrap", description: "complete range 0f Velcro Sleeve", img: img10 },
    { title: "Safe- Bundler", description: "Tool For Spiral Guard Mounting", img: img13 }
  ];

  return (
    <ProductGallery 
      title="SAFEPLAST HOSE PROTECTION" 
      products={products} 
    />
  );
};

export default Safeplast;
