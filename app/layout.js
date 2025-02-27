import { Manrope, Poppins } from "next/font/google"; 
import "./globals.css"; 
import { Provider } from "@/components/ui/provider"; 
import { Box, defaultSystem } from "@chakra-ui/react";

// Load the fonts with weights specified
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], 
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Adding weights for Poppins
});

export const metadata = {
  title: "Meet Simon",
  description: "Frontend Developer",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
  
    <body className={`${manrope.variable} ${poppins.variable}`} suppressHydrationWarning>
      <Provider>
        {children}
      </Provider>
    </body>
  </html>
  
  );
}
