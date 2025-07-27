import React, { useState } from "react";
import NavBar from "../NavBar/navbar.js";
import Footer from "../Footer/footer.js";
import ShopHeader from "./shopHeader.js";
import ShopItems from "./shopItems.js";
const shop = () => {
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
      <NavBar />
      <ShopHeader
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        shopSections={shopSections}
      />
      <ShopItems activeSection={activeSection} />
      <Footer />
    </div>
  );
};
export default shop;
