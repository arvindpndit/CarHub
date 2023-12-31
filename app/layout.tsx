
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


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
      <body className=" w-full md:w-3/4 flex flex-col justify-center mx-auto px-2 md:px-0">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
