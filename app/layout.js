import { Outfit } from "next/font/google";
import "./globals.css";
import  Header from "./component/header/header.jsx"

const outfit = Outfit({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
