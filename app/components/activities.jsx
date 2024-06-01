'use client'

import { ActivityCard } from './activity-card'
import { CATEGORIES } from '../Utils/utils'
import Link from 'next/link'

export const Activities = props => {
  return (
    <div>
      <div className='container items-center mx-auto flex flex-row p-3 justify-between'>
        <h1 className=' font-extrabold text-xl md:text-2xl  text-black dark:text-white'>
          Add Community
        </h1>
      </div>
      <div className='flex flex-wrap container mx-auto w-full  '>
        <p className='px-3  text-black dark:text-white font-semibold '>
          Here you can add your community{' '}
          <span className=' text-black dark:text-white italic font-normal'>
            (whatsapp group, whatsapp channel, telegram group, telegram channel,
            youtube channel, websites, apps and other platform you want to drive
            people to )
          </span>{' '}
          to make it discoverable by people
        </p>
        <Link
          href='/upload'
          className='text-center bg-mediumBlue p-2 w-full mx-3 mt-3 rounded-lg text-white'
        >
          upload your community
        </Link>
      </div>
      <div className='container items-center mx-auto flex flex-row p-3 justify-between'>
        <h1 className=' font-extrabold text-xl md:text-2xl  text-black dark:text-white'>
          Categories
        </h1>
      </div>
      <div className='flex flex-wrap container mx-auto w-full  '>
        {CATEGORIES.map((category, index) => {
          return (
            <ActivityCard
              text={category.text}
              link={category.link}
              index={index}
            />
          )
        })}
      </div>
    </div>
  )
}
