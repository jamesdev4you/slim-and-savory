import type { Metadata } from "next";
import Providers from "./providers";
import ThemeRegistry from "./theme-registry";
import { fetchFooterSettings } from "@/sanity/fetchFooterSettings";

import NavBar from "@/PageComponents/NavBar/navbar";
import Footer from "@/PageComponents/Footer/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slim & Savory",
  description: "Delicious and healthy recipes for your lifestyle.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footer = await fetchFooterSettings();

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Providers>
            <NavBar />
            <div id="print-root" />
            {children}
            <Footer footer={footer} />
          </Providers>
        </ThemeRegistry>
      </body>
    </html>
  );
}
