import { Inter } from "next/font/google";
import "../globals.css";
import { Footer } from "@/Components";
import Header from "@/Components/Home/Navbar/Header";
import { Toaster } from "react-hot-toast";
import AuthProviders, { ThemeProvider } from "@/providers/AuthProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Envobyte Ltd || Home",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="https://i.ibb.co/nM2nH6n/android-chrome-256x256.png"
        sizes="any"
      />

      <body className={inter.className}>
        <Toaster />
        <AuthProviders>
          <Header />
          {children}
          <Footer />
        </AuthProviders>
      </body>
    </html>
  );
}
