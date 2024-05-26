'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { menuItems } from '../Utils/utils'
import { signOut } from 'firebase/auth'
import { Auth } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'

const AppBar = () => {
  const [user] = useAuthState(Auth)
  const [isToggled, setIsToggled] = useState(false)
  function handleClick () {
    setIsToggled(!isToggled)
  }

  return (
    <div className=' bg-mediumBlue relative z-10 mx-auto justify-center '>
      <div className='container items-center mx-auto flex flex-row justify-between p-3'>
        <Image
          height={100}
          width={200}
          src={'/icon2.svg'}
          className='-my-5 '
          layout='fixed'
        />

        <div className='flex flex-row space-x-1 items-center'>
          <button onClick={handleClick} className='block p-2 px-3 '>
            <Image
              src={isToggled ? '/close.png' : '/menu.png'}
              alt={isToggled ? 'close' : 'menu'}
              width={30}
              height={30}
              className='bg-veryLightBlue p-1 rounded-md'
            />
          </button>
          <h1 className='hidden md:block text-white font-mono text-3xl'>
            {isToggled ? 'CLOSE' : 'MENU'}
          </h1>
        </div>
      </div>
      {isToggled && (
        <div className='flex mt-16 flex-col absolute h-screen overflow-y-hidden inset-0 items-center justify-between bg-mediumBlue p-3'>
          <div className='flex flex-col divide-y space-y-3'>
            {menuItems.map((item, index) => {
              return (
                <ul>
                  <Link
                    href={item.link}
                    onClick={handleClick}
                    className='text-white'
                  >
                    <div className='text-center'>{item.text}</div>
                  </Link>
                </ul>
              )
            })}
            {user && (
              <div
                onClick={() => {
                  signOut(Auth)
                }}
                className='text-white pt-2'
              >
                <div className='text-center'>Sign Out</div>
              </div>
            )}
          </div>
          <div className='mb-10'>
            <span className='text-white font-thin'>Disclaimer: </span>
            <span className='text-white'>This not official Zimsec app</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default AppBar
