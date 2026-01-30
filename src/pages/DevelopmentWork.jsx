import React from 'react';
import ProductGallery from '../components/ProductGallery';

import img1 from '../assets/products/development_work/hydraulic_cylinder_opener_tool_1.png';


const DevelopmentWork = () => {
  const products = [
    {
      title: "Hydraulic Cylinder Opener Tool", img: img1, description:
        `A robust and reliable solution for dismantling hydraulic cylinders with ease and precision.

This tool is engineered to deliver:

✅ Superior performance

✅ Enhanced durability

✅ User-friendly operation



Perfect for industries seeking efficient and safe maintenance tools.` }
  ];

  return (
    <ProductGallery
      title="DEVELOPMENT WORK"
      products={products}
    />
  );
};

export default DevelopmentWork;
