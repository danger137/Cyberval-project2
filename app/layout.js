import { Outfit, Manrope, Sora } from "next/font/google";
import "./globals.css";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });
const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-manrope'
});
const sora = Sora({
  subsets: ["latin"],
  variable: '--font-sora'
});


import GlobalLayoutWrapper from "./component/GlobalLayoutWrapper.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${manrope.variable} ${sora.variable}`}>
        <GlobalLayoutWrapper>
          {children}
        </GlobalLayoutWrapper>
      </body>
    </html>
  );
}
