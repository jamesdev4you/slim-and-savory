"use client";
import { useState, useEffect } from "react";
import ShopHeader from "./shopHeader.js";
import ShopItems from "./shopItems.js";
import { fetchShopItems } from "@/sanity/shop";

const Shop = () => {
  const shopSections = [
    "All Products",
    "Kitchen Tools",
    "Cutting Gear",
    "Appliances",
    "Beverage Tools",
  ];

  const [activeSection, setActiveSection] = useState(shopSections[0]);
  const [items, setItems] = useState(null);

  // 🔥 Fetch items on mount
  useEffect(() => {
    async function loadItems() {
      try {
        const data = await fetchShopItems();
        setItems(data);
      } catch (err) {
        console.error("Failed to fetch shop items:", err);
      }
    }
    loadItems();
  }, []);

  return (
    <div>
      <ShopHeader
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        shopSections={shopSections}
      />

      {/* 🔥 Pass the fetched items into ShopItems */}
      <ShopItems activeSection={activeSection} items={items} />
    </div>
  );
};

export default Shop;
