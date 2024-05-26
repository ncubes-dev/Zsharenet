
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

  const currentYear = new Date().getFullYear()
  return (
    <html lang="en">
      <body className=' bg-backgroundGray min-h-screen'>
        <AppBar />
        {children}
        <section >
          <div className=' container items-center mx-auto flex flex-col w-full p-3'>
            <h1 className='text-center font-thin text-darkBlue'>Developed By--</h1>
            <Link href={Links.portfolio}>
              <span className='text-center text-darkBlue font-extrabold'>©{currentYear} All Rights Reserved. </span>
              <span className='text-center font-extrabold text-lightBlue underline'>@ncubesdev</span>
            </Link>
            <h1 className='text-center font-normal italic text-darkBlue'>ncubes1999@gmail.com</h1>
          </div>
        </section>
      </body>
    </html>
  );
}
