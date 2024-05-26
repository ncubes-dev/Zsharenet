'use client'

import { ActivityCard } from './activity-card'
import { CATEGORIES } from '../Utils/utils'

export const Activities = props => {
  return (
    <div>
      <div className='container items-center mx-auto flex flex-row p-3 justify-between'>
        <h1 className=' font-extrabold text-xl md:text-2xl text-darkBlue'>
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
