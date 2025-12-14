import type { Metadata } from "next";
import Providers from "./providers";
import ThemeRegistry from "./theme-registry";

import NavBar from "@/PageComponents/NavBar/navbar";
import Footer from "@/PageComponents/Footer/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slim & Savory",
  description: "Delicious and healthy recipes for your lifestyle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Providers>
            <NavBar />
            <div id="print-root" />
            {children}
            <Footer />
          </Providers>
        </ThemeRegistry>
      </body>
    </html>
  );
}
