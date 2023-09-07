import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import News from "@/components/News";

import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Book Marks Landing",
  description: "FrontEnd Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen h-screen">
      <body className={`${rubik.className} w-full h-full overflow-x-hidden`}>
        <Header />
        {children}
        <News />
        <Footer />
      </body>
    </html>
  );
}
