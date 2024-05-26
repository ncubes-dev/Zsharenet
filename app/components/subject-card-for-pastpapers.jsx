'use client'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
export const SubjectCard = props => {
  const [isToggled, setIsToggled] = useState(false)

  function cardClick () {
    setIsToggled(true)
    props.onBooleanChange(true)
  }
  function back () {
    setIsToggled(false)
    props.onBooleanChange(false)
  }

  return (
    <div
      onClick={props.freeze ? null : cardClick}
      className='relative flex flex-col mx-auto shadow-lg bg-white rounded-lg my-1 h-48 w-1/2 md:w-1/3  lg:w-1/4  '
    >
      <div className='mx-auto my-2 rounded-full  bg-white p-4 '>
        <Image
          className='block h-28 w-28'
          width={512}
          height={512}
          src={props.data.image}
          alt={`/${props.data.subjectName.replace(/_/g, ' ')}`}
        />
      </div>
      <h1 className='font-bold text-mediumBlue text-xl text-center'>
        {props.data.subjectName.replace(/_/g, ' ')}
      </h1>
      {isToggled && (
        <div className='absolute bg-gray inset-0 items-center rounded-lg flex flex-col container justify-center'>
          <h1 className='text-center font-extrabold text-darkBlue'>
            Choose Level
          </h1>
          {props.data.o_level != null && (
            <div className='p-2'>
              <Link
                className='bg-mediumBlue  text-white rounded-lg m-1 px-4 py-1'
                href={`pastpapers/o${props.data.subjectName}`}
              >
                O' level
              </Link>
            </div>
          )}
          {props.data.a_level != null && (
            <div className='p-2'>
              <Link
                className=' bg-mediumBlue  text-white rounded-lg m-1 px-4 py-1'
                href={`pastpapers/a${props.data.subjectName}`}
              >
                A' level
              </Link>
            </div>
          )}
          <button
            onClick={back}
            className=' bg-mediumBlue text-white rounded-lg m-1 px-4 py-1'
          >
            Back
          </button>
        </div>
      )}
    </div>
  )
}
