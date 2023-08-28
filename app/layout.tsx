import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import "./globals.css";
import type { Metadata } from "next";

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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
