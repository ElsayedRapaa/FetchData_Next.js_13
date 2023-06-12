import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "./component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js App",
  description: "Fetching Data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
