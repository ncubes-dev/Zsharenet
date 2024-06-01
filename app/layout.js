'use client'
import './globals.css'
import AppBar from '@/app/components/appbar'
import { useState } from 'react';


export const viewport = {
  themeColor: "#FFFFFF",
};
export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <html lang="en" class={`${darkMode && 'dark'}`}>
      <body className=' bg-backgroundGray dark:bg-backgroundDark min-h-screen '>
        <AppBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        {children}

      </body>
    </html>
  );
}
