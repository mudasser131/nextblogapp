import {Noto_Sans} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "../../context/ThemeContext";

// Load Noto Sans with Latin subset
const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["400", "700"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>


<ThemeProvider>

<Navbar/>
        
        {children}

        <Footer/>

</ThemeProvider>

        
      
      </body>
    </html>
  );
}
