'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CATEGORIES } from '../Utils/utils'
import { RECENT_ACTIVITY } from '../Utils/utils'
import { ActivityCard } from './activity-card'

export const RecentActivity = () => {
  const [recentActivity, setRecentActivity] = useState(null)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const activity = localStorage.getItem(RECENT_ACTIVITY)
        setRecentActivity(activity ? parseInt(activity, 10) : null)
      } catch (error) {
        console.error('Error retrieving recent activity:', error)
      }
    }
  }, [])

  const recent = recentActivity === null ? null : CATEGORIES[recentActivity]

  return (
    recent !== null && (
      <div>
        <div className='container items-center mx-auto flex flex-row p-3 justify-between'>
          <h1 className=' font-extrabold text-xl md:text-2xl  text-black dark:text-white'>
            Favourite
          </h1>
        </div>
        <div className='md:ps-16 md:ml-16'>
          <ActivityCard index={4} text={recent.text} link={recent.link} />
        </div>
      </div>
    )
  )
}
