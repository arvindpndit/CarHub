import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Carhub",
  description: "Get you desired car at Carhub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-3/4 flex flex-col justify-center mx-auto">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
