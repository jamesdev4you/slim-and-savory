"use client";

import { useEffect, useState } from "react";

import ShopHeader from "./shopHeader";
import ShopItems from "./shopItems";

import { fetchShopPage } from "@/sanity/fetchShopPage";
import { fetchShopItems } from "@/sanity/shop";

const Shop = () => {
  const [shopPage, setShopPage] = useState(null);
  const [items, setItems] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    async function loadData() {
      const page = await fetchShopPage();
      const products = await fetchShopItems();

      setShopPage(page);
      setItems(products);
      setActiveSection("all"); // default
    }
    loadData();
  }, []);

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
