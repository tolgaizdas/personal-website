import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tolga İzdaş",
  description: "Personal website of Tolga İzdaş",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} mx-0 md:mx-[10%]`}>{children}</body>
    </html>
  );
}
