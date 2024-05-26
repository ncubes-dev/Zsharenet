'use client'
import Link from 'next/link'
import { RECENT_ACTIVITY } from '../Utils/utils'
import Image from 'next/image'

export const ActivityCard = props => {
  function putToLocalStorage () {
    if (typeof window !== 'undefined') {
      localStorage.setItem(RECENT_ACTIVITY, `${props.index}`)
    }
  }

  return (
    <div className='bg-transparent p-5  w-1/2 md:w-1/3'>
      <Link href={'/category/2'} onClick={putToLocalStorage}>
        <div className='flex flex-col mx-auto shadow-lg bg-white rounded-lg w-full p-4 '>
          <div className='flex w-full justify-center'>
            <Image
              className='p-3'
              width={512}
              height={512}
              src={'/biology.png'}
              // src={`${props.data.link}.png`}
              alt={props.text}
              // alt={'hhhh
            />
          </div>
          <h1 className='font-bold text-mediumBlue text-xl text-center'>
            {props.text}
          </h1>
        </div>
      </Link>
    </div>
  )
}