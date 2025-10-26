import React, { useState } from "react";
import NavBar from "../NavBar/navbar.js";
import Footer from "../Footer/footer.js";
import PressHeader from "./pressheader.js";
import PressItems from "./pressitems.js";

const press = () => {
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
      <NavBar />
      <PressHeader
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        pressSections={pressSections}
      />
      <PressItems activeSection={activeSection} />
      <Footer />
    </div>
  );
};
export default press;
