'use client'
import { SubjectCard } from '../components/subject-card'
import { subjects } from '../Utils/utils'
import { useState } from 'react'

const Practice = () => {
  const [freeze, setFreeze] = useState(false)

  const handleBooleanChange = newBooleanValue => {
    setFreeze(newBooleanValue)
  }
  return (
    <div className='min-h-screen'>
      <div className='w-full bg-white'>
        <h1 className='font-extrabold text-darkBlue text-2xl text-center p-2'>
          OFFLINE PRACTICE QUESTIONS
        </h1>
      </div>
      <div className='flex flex-wrap container mx-auto w-full'>
        {subjects.map((subject, index) => {
          return (
            <SubjectCard
              data={subject}
              freeze={freeze}
              onBooleanChange={handleBooleanChange}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Practice
