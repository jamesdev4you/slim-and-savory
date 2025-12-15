"use client";

import { useState } from "react";
import ShopHeader from "./shopHeader";
import ShopItems from "./shopItems";

const Shop = ({ shopPage, items }) => {
  const [activeSection, setActiveSection] = useState("all");

  if (!shopPage || !items) return null;

  const shopSections = [
    { label: "All Products", value: "all" },
    ...shopPage.categories.map((category) => ({
      label: category.title,
      value: category.value,
    })),
  ];

  return (
    <>
      <ShopHeader
        title={shopPage.title}
        subtitle={shopPage.subtitle}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        shopSections={shopSections}
      />
      <ShopItems activeSection={activeSection} items={items} />
    </>
  );
};

export default Shop;
