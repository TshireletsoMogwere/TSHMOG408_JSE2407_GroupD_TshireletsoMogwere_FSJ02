import {Inter} from "next/font/google";
import Header from "./components/header";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "DigitizeMart.",
  description: "This is an E-commerce Store project designed as a web application to allow users to browse, search, filter, and sort products from a mock e-commerce API",
};

/*
* This function is the root layout component for the application.
* It wraps the application's content with the necessary HTML structure and applies the Google Inter font.
*
* @param {Object} props - The component's props.
* @param {React.ReactNode} props.children - The child components to be rendered within the root layout.
*
* @returns {React.ReactElement} - The root layout component with the applied HTML structure and font.
*/
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body
        className={inter.className} >
          <Header />
        {children}
      </body>
    </html>
  );
}
