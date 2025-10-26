export const metadata = {
  title: "Slim & Savory",
  description: "Delicious and healthy recipes for your lifestyle.",
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
