import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "London Coffee — Premium Editorial Café Experience",
  description: "Discover handcrafted coffee made with passion, rich flavor, and a little London soul. Established in London, 2023.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-brand-outer antialiased">
        {children}
      </body>
    </html>
  );
}

