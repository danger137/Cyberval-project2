import { Outfit, Manrope, Sora } from "next/font/google";
import "./globals.css";
import  Header from "./component/header/header.jsx"
import Footer from "./component/footer/footer.jsx"

const outfit = Outfit({ subsets: ["latin"] });
const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-manrope'
});
const sora = Sora({
  subsets: ["latin"],
  variable: '--font-sora'
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${manrope.variable} ${sora.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
