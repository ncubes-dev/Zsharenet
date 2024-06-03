'use client'
import './globals.css'
import AppBar from '@/app/components/appbar'
import { useState, useEffect } from 'react';
import NotificationProvider from './components/NotificationProvider';
import { toast } from 'react-toastify'

export const viewport = {
  themeColor: "#FFFFFF",
};
export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(null)
  //   () => {
  //   const savedMode = localStorage.getItem('IS_DARK_MODE');
  //   return savedMode === "true" ? true : false;
  // });

  const toggleDarkMode = () => {
    if (typeof window !== 'undefined') {
      setDarkMode(prevMode => !prevMode); // Toggle the state
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (darkMode !== null) {
        localStorage.setItem('IS_DARK_MODE', darkMode ? "true" : "false");
      }
    }
  }, [darkMode]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const mode = localStorage.getItem('IS_DARK_MODE');
        setDarkMode(mode === "true");
      } catch (error) {
        console.error('Error retrieving dark mode setting:', error);
      }
    }
  }, []);


  return (
    <html lang="en" class={`${darkMode && 'dark'}`}>
      <body className=' bg-backgroundGray dark:bg-backgroundDark min-h-screen '>
        <AppBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

        {children}
        <NotificationProvider />
      </body>
    </html>
  );
}
