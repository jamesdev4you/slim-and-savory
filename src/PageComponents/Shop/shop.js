"use client";
import { useState } from "react";
import ShopHeader from "./shopHeader.js";
import ShopItems from "./shopItems.js";
const Shop = () => {
  const shopSections = [
    "All Products",
    "Food Related",
    "Beauty",
    "Decorative",
    "Wellness",
  ];

  const [activeSection, setActiveSection] = useState(shopSections[0]);

  return (
    <div>
      <ShopHeader
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        shopSections={shopSections}
      />
      <ShopItems activeSection={activeSection} />
    </div>
  );
};
export default Shop;
