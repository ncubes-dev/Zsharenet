'use client'
import { useParams } from 'next/navigation'
import PdfCard from '@/app/components/community-card'
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

const QuestionPaper = () => {
  const id = useParams()
  const subject = id.paper.slice(1)
  const level = id.paper.startsWith('a') ? "A' level" : "O' level"
  const [freeze, setFreeze] = useState(false)
  const [firebasePapers, setFirebasePapers] = useState([])
  useEffect(() => {
    async function fetchData () {
      const data = await getFirebasePapers()
      setFirebasePapers(data)
    }
    fetchData()
  }, [])

  const handleBooleanChange = newBooleanValue => {
    setFreeze(newBooleanValue)
  }

  const paperFromFirebase = firebasePapers.filter(
    paper => paper.subject === subject && paper.level === level
  )

  return (
    <div className='flex flex-wrap container mx-auto w-full '>
      {subject === 'Maths' && (
        <div className='items-center flex flex-row bg-veryLightBlue p-3 w-full h-1/3 container mx-auto justify-between'>
          <h1>Subscribe to our channel for work examples</h1>
          <Link
            className='bg-red p-2 px-3 rounded-lg text-white'
            href={'https://www.youtube.com/@ncubestv9118'}
          >
            Visit Youtube
          </Link>
        </div>
      )}
      {paperFromFirebase.length === 0 ? (
        <div className='items-center flex flex-row bg-veryLightBlue p-3 w-full h-1/3 container mx-auto justify-between'>
          <h1>There are not document here yet</h1>
          <Link
            className='bg-mediumBlue p-2 rounded-lg text-white'
            href={'/upload'}
          >
            Upload
          </Link>
        </div>
      ) : (
        paperFromFirebase.map((paper, index) => {
          return (
            <PdfCard
              data={paper}
              freeze={freeze}
              onBooleanChange={handleBooleanChange}
            />
          )
        })
      )}
    </div>
  )
}

export default QuestionPaper
