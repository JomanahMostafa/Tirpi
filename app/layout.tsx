import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LayoutClient from "./Loading/LayoutClient";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";
import Footer from "./components/Home/Footer/Footer";
import ScrollToTop from "./components/Home/Helper/ScrollToTop";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tripi - Travel For You",
  description:
    "Discover amazing travel destinations with Tripi. Book your next adventure with the best prices on 2,000,000+ properties worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased overflow-x-hidden`}>
        <LayoutClient>
          <ResponsiveNav />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </LayoutClient>
      </body>
    </html>
  );
}