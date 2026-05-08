import { Sora, Manrope } from 'next/font/google'
import "./globals.css";

export const metadata = {
  title: "Cybervol - Cybersecurity & Risk Transformation Strategy Company",
  description: "Elite cybersecurity solutions to protect your digital assets and boost security. We provide tailored strategies for resilient growth.",
};

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sora',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
})


import GlobalLayoutWrapper from "./component/GlobalLayoutWrapper.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${manrope.variable}`}>
        <GlobalLayoutWrapper>
          {children}
        </GlobalLayoutWrapper>
      </body>
    </html>
  );
}
