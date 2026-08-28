import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/scroll/LenisProvider";
import Preloader from "@/components/loading/Preloader";

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
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        {/* Add 'loading' class to document element immediately to prevent flash of un-animated content */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('loading');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-outer antialiased" suppressHydrationWarning>
        {/* Animated intro preloader for premium café vibe */}
        <Preloader />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

