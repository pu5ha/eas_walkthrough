import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EAS Walkthrough",
  description: "CryptoZombies coding course completion attestation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-slate-900 text-white relative`}
      >
        {children}
      </body>
    </html>
  );
}
