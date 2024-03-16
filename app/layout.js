import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook - Connect With the world",
  description: "This is Facebook we are connect ot world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <div className="container mx-auto min-h-[85vh]"> {children}</div>
     
      <Footer/>
      </body>
    </html>
  );
}
