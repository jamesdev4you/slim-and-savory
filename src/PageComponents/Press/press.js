"use client";
import { useState } from "react";
import PressHeader from "./pressheader.js";
import PressItems from "./pressitems.js";

const Press = () => {
  const pressSections = [
    "All Products",
    "Food Related",
    "Beauty",
    "Decorative",
    "Wellness",
  ];

  const [activeSection, setActiveSection] = useState(pressSections[0]);

  return (
    <div>
      <PressHeader
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        pressSections={pressSections}
      />
      <PressItems activeSection={activeSection} />
    </div>
  );
};
export default Press;
