'use client'
import { useParams } from 'next/navigation'
import CommunityCard from '@/app/components/community-card'
import { useState, useEffect } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { COMMUNITY } from '@/app/Utils/utils'
import { Db } from '@/app/firebase/config'
import Link from 'next/link'

async function getcommunities (category) {
  const q = query(collection(Db, COMMUNITY), where('category', '==', category))

  const querySnapshot = await getDocs(q)
  const data = []
  querySnapshot.forEach(doc => {
    data.push({ id: doc.id, ...doc.data() })
  })

  return data
}

const Topic = () => {
  const topic = useParams().topic
  const [communities, setCommunities] = useState([])
  useEffect(() => {
    async function fetchData () {
      const data = await getcommunities(topic)
      setCommunities(data)
    }
    fetchData()
  }, [])

  return (
    <div className='flex flex-wrap container mx-auto w-full '>
      <div className='items-center flex flex-row bg-veryLightBlue p-3 w-full h-1/3 container mx-auto justify-between'>
        <h1 className=' font-extrabold text-xl md:text-2xl text-darkBlue text-center w-full'>
          {' '}
          Welcome to {topic} category!
        </h1>
      </div>

      {communities.length === 0 ? (
        <div className='items-center flex flex-row bg-veryLightBlue p-3 w-full h-1/3 container mx-auto justify-between'>
          <h1>There are no communities here yet!</h1>
        </div>
      ) : (
        communities.map((paper, index) => {
          return <CommunityCard data={paper} />
        })
      )}
    </div>
  )
}

export default Topic
