
import "./globals.css";

import AppBar from "@/app/components/appbar";
import Link from "next/link";
import { Links } from "./Utils/utils";



export const metadata = {
  manifest: "manifest.json",
  title: "ZShareNet",
  description: "Welcome to ZShareNet, the ultimate platform for sharing and discovering digital links. With ZShareNet, you can easily share links to your channels, WhatsApp groups, YouTube videos, Instagram photos, Twitter feeds, websites, and more. It’s not just an app, it’s a digital revolution that brings your online presence together in one place. Connect, share, and grow with ZShareNet - Your digital world, unified!",
};
export const viewport = {
  themeColor: "#FFFFFF",
};
export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className=' bg-backgroundGray min-h-screen'>
        <AppBar />
        {children}

      </body>
    </html>
  );
}
