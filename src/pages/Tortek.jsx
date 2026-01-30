import React from 'react';
import ProductGallery from '../components/ProductGallery';

import img1 from '../assets/products/tortek/domestic_wire_1.png';
import img2 from '../assets/products/tortek/multicore_flexible_cable_2.png';
import img3 from '../assets/products/tortek/multicore_flexible_cable_3.png';
import img4 from '../assets/products/tortek/flat_submersible_cable_4.png';
import img5 from '../assets/products/tortek/multicore_flexible_cable_5.png';
import img6 from '../assets/products/tortek/solar_cable_6.png';
import img7 from '../assets/products/tortek/lt_power_cable_7.png';
import img8 from '../assets/products/tortek/flat_submersible_cable_8.png';
import img9 from '../assets/products/tortek/lt_power_cable_9.png';
import img10 from '../assets/products/tortek/mv_power_cable_10.png';
import img11 from '../assets/products/tortek/lt_power_cable_11.png';
import img12 from '../assets/products/tortek/mining_cable_12.png';
import img13 from '../assets/products/tortek/communication_cable_13.png';
import img14 from '../assets/products/tortek/lt_control_cable_14.png';
import img15 from '../assets/products/tortek/lt_control_cable_15.png';
import img16 from '../assets/products/tortek/communication_cable_16.png';
import img17 from '../assets/products/tortek/communication_cable_17.png';
import img18 from '../assets/products/tortek/instrumentation_cable_18.png';
import img19 from '../assets/products/tortek/instrumentation_cable_19.png';
import img20 from '../assets/products/tortek/fire_survival_cable_20.png';
import img21 from '../assets/products/tortek/instrumentation_cable_21.png';
import img22 from '../assets/products/tortek/thermocouple_cable_22.png';
import img23 from '../assets/products/tortek/instrumentation_cable_23.png';
import img24 from '../assets/products/tortek/fire_survival_cable_24.png';


const Tortek = () => {
  const products = [
    { title: "Domestic Wire", img: img1 },
    { title: "Multicore Flexible Cable", img: img3 },
    { title: "Flat Submersible Cable", img: img4 },
    { title: "Solar Cable", img: img6 },
    { title: "LT Power Cable", img: img9 },
    { title: "MV Power Cable", img: img10 },
    { title: "Mining Cable", img: img12 },
    { title: "LT Control Cable", img: img15 },
    { title: "Communication Cable", img: img17 },
    { title: "Instrumentation Cable", img: img19 },
    { title: "Fire Survival Cable", img: img20 },
    { title: "ThermoCouple Cable", img: img22 },
    
  ];

  return (
    <ProductGallery 
      title="TORTEK WIRES AND CABLES" 
      products={products} 
    />
  );
};

export default Tortek;
