'use client'
import { useParams } from 'next/navigation'
import CommunityCard from '@/app/components/community-card'
import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { PASTPAPERS_COLLECTION } from '@/app/Utils/utils'
import { Db } from '@/app/firebase/config'
import Link from 'next/link'

async function getFirebasePapers () {
  const querySnapshot = await getDocs(collection(Db, PASTPAPERS_COLLECTION))
  const data = []
  querySnapshot.forEach(doc => {
    data.push({ id: doc.id, ...doc.data() })
  })

  return data
}

const Topic = () => {
  const topic = useParams().topic.slice(1)
  //fetch by topic
  const [firebasePapers, setFirebasePapers] = useState([])
  useEffect(() => {
    async function fetchData () {
      const data = await getFirebasePapers()
      setFirebasePapers(data)
    }
    fetchData()
  }, [])

  return (
    <div className='flex flex-wrap container mx-auto w-full '>
      <div className='items-center flex flex-row bg-veryLightBlue p-3 w-full h-1/3 container mx-auto justify-between'>
        <h1>Upload your community</h1>
        <Link
          className='bg-mediumBlue p-2 px-3 rounded-lg text-white'
          href={'/upload'}
        >
          Upload
        </Link>
      </div>

      {firebasePapers.length === 0 ? (
        <div className='items-center flex flex-row bg-veryLightBlue p-3 w-full h-1/3 container mx-auto justify-between'>
          <h1>There are no communities here yet!</h1>
        </div>
      ) : (
        firebasePapers.map((paper, index) => {
          return <CommunityCard data={topic} />
        })
      )}
    </div>
  )
}

export default Topic
