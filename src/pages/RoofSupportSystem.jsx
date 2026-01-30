import React from 'react';
import ProductGallery from '../components/ProductGallery';

import img1 from '../assets/products/roof_support_system/resin_capsule___cement_capsule_1.png';
import img2 from '../assets/products/roof_support_system/rock_bolt_2.png';
import img3 from '../assets/products/roof_support_system/resin_capsule___cement_capsule_3.png';
import img4 from '../assets/products/roof_support_system/bearing_plate_4.png';
import img5 from '../assets/products/roof_support_system/resin_capsule___cement_capsule_5.png';
import img6 from '../assets/products/roof_support_system/short_firing_cable___blasting_cable_6.png';
import img7 from '../assets/products/roof_support_system/short_firing_cable___blasting_cable_7.png';
import img8 from '../assets/products/roof_support_system/welded_wire_mesh_8.png';
import img9 from '../assets/products/roof_support_system/short_firing_cable___blasting_cable_9.png';
import img10 from '../assets/products/roof_support_system/dome_plate_10.png';
import img11 from '../assets/products/roof_support_system/short_firing_cable___blasting_cable_11.png';
import img12 from '../assets/products/roof_support_system/welded_wire_mesh_12.png';


const RoofSupportSystem = () => {
  const products = [
    { title: "Resin Capsule / Cement Capsule", description:`Resin capsules are for mining, construction, and industrial use only and are intended for use in conjunction with tendons. Resin capsules are used to anchor rock bolts and long tendons for roof support in mines and tunnels. They can be used with hydraulic and pneumatic-type bolters.`, img: img1 },
    { title: "Rock Bolt", description:`A rock bolt is a long anchor bolt for stabilizing rock excavations, which may be used in tunnels or rock cuts. It transfers loads from the unstable exterior to the confined interior of the rock mass`, img: img2 },
    { title: "BEARING PLATE", description:`Dome Plates are manufactured from high-strength steel. They are designed to help prevent loose material from falling between the roof bolt patterns and provide strength to your immediate roof.`, img: img4 },
    { title: "Short firing cable / blasting cable", description:`We are counted among the top-notch cable organizations engaged in offering a wide array of Blasting cables to our esteemed customers. We are making superior quality Blasting Cables manufactured from finer quality material. Owing to this the products are widely appreciated for their durability, high tolerance capability, and resistance against abrasion.`, img: img7 },
    { title: "WELDED WIRE MESH", description:`Rock material falling between the bolting pattern causes most rock fall injuries. Welded Wire Mesh provides a protective “screen” that reduces the number of rock fall injuries in the protected area.`, img: img8 },
    { title: "DOME PLATE", img: img10, description:`Dome Plates provide high load bearing capacities and are available in sizes 150 mm and 200 mm square, typically used with Solid Bolts, Strata Bolts and Cable Bolts`, },
  ];

  return (
    <ProductGallery 
      title="Underground Roof Support System" 
      products={products} 
    />
  );
};

export default RoofSupportSystem;
