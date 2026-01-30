import React from 'react';
import ProductGallery from '../components/ProductGallery';

import img1 from '../assets/products/spal/double_centrifugal_blowers__brushed__1.png';


const Spal = () => {
  const products = [
    { title: "Double centrifugal blowers (brushed)",description:`A high-performance double blower designed for efficient airflow, delivering up to 1160 m³/h (684 CFM). With a current draw of 12.7A, it is ideal for demanding applications requiring robust air circulation.`, img: img1 }
  ];

  return (
    <ProductGallery 
      title="SPAL AUTOMOTIVE" 
      products={products} 
    />
  );
};

export default Spal;
