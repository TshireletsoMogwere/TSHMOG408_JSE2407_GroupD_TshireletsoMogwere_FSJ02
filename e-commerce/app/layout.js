import { Inter } from "next/font/google";
import Header from "./components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export function getMetadata(productTitle) {
  return {
    title: `${productTitle} DigitizeMart.`,
    description: `This is the product page for ${productTitle} on DigitizeMart, an E-commerce Store project designed as a web application to allow users to browse, search, filter, and sort products from a mock e-commerce API`,
  };
}

export default function RootLayout({ children, productTitle = "" }) {
  const metadata = getMetadata(productTitle);

  return (
    <html lang="en" className="bg-white">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}