'use client'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
export const SubjectCard = props => {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <div className='relative flex flex-col mx-auto shadow-lg bg-white rounded-lg my-1 h-48 w-1/2 md:w-1/3  lg:w-1/4  '>
      <div className='mx-auto my-2 rounded-full  bg-white p-4 '>
        <Image
          className='block h-28 w-28'
          width={512}
          height={512}
          src={props.data.image}
          alt={`/${props.data.category}`}
        />
      </div>
      <h1 className='font-bold text-mediumBlue text-xl text-center'>
        {props.data.category}
      </h1>
    </div>
  )
}
