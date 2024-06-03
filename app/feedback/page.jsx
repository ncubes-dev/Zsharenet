'use client'
import { useState, useEffect } from 'react'
import NotificationProvider from '../components/NotificationProvider'
import { toast } from 'react-toastify'
import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  getDocs
} from 'firebase/firestore'
import { Db } from '../firebase/config'
import { FEEDBACK } from '../Utils/utils'
import { Auth } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'

async function getFeedbacks () {
  const querySnapshot = await getDocs(collection(Db, FEEDBACK))
  const data = []
  querySnapshot.forEach(doc => {
    data.push({ id: doc.id, ...doc.data() })
  })

  return data
}

const Feedback = () => {
  const [loading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [user] = useAuthState(Auth)
  const [admin, setAdmin] = useState('')
  const [firebaseFeedbacks, setFirebaseFeedbacks] = useState([])

  function messageChange (mm) {
    setMessage(mm.target.value)
  }

  async function uploadDoc () {
    const timeStamp = Date.now()
    if (message.length > 1) {
      try {
        setIsLoading(true)
        const d = await addDoc(collection(Db, FEEDBACK), {})
        await setDoc(doc(Db, FEEDBACK, d.id), {
          message: message,
          id: d.id,
          timeStamp: timeStamp
        })
        setMessage('')
        setIsLoading(false)
      } catch (e) {
        setIsLoading(false)
        toast.error(e)
      }
    } else {
      toast.error('Enter feedback')
    }
  }
  function timestampToHumanReadable (timestamp) {
    const date = new Date(timestamp)
    return date.toDateString()
  }
  async function getDocuments () {
    const customAdsRef = doc(Db, 'customAds', 'customAds')
    try {
      const docSnap = await getDoc(customAdsRef)
      if (docSnap.exists()) {
        return docSnap.data()
      } else {
        null
      }
    } catch (e) {
      return {
        url: '',
        allowedId: ''
      }
    }
  }
  useEffect(() => {
    async function fetchData () {
      const data = await getFeedbacks()
      setFirebaseFeedbacks(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData () {
      const data = await getDocuments()
      setAdmin(data.allowedId)
    }
    fetchData()
  }, [])

  return (
    <div className='flex flex-col w-full bg-backgroundGray dark:bg-lightDark'>
      {user?.uid === admin ? (
        <div>
          {firebaseFeedbacks.map((f, i) => {
            return (
              <ul className='divide-y divide-gray-200 bg-white dark:bg-lightDark'>
                <li className='bg-white p-2  dark:bg-lightDark text-black dark:text-white'>
                  <h1 className='text-start w-full'>{f.message}</h1>
                  <h1>{timestampToHumanReadable(f.timeStamp)}</h1>
                </li>
              </ul>
            )
          })}
        </div>
      ) : (
        <div>
          <div className='flex flex-col mt-2 pt-5  md:mt-10'>
            <div className='flex justify-center'>
              <span className='font-thin pr-3 text-3xl md:text-4xl text-center text-black dark:text-white'>
                Send us
              </span>
              <span className='font-bold  text-black dark:text-white text-3xl md:text-4xl text-center '>
                FeedBack
              </span>
            </div>
          </div>
          <div className='container mx-auto justify-center p-2 mt-4 flex flex-col w-full '>
            <form className='p-6 bg-veryLightBlue dark:bg-lightDark rounded-lg shadow-lg'>
              <label class='block'>
                <span class='block text-sm font-medium text-black dark:text-white'>
                  FeedBack
                </span>
                <textarea
                  rows={20}
                  onChange={messageChange}
                  value={message}
                  type={'text'}
                  placeholder={
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
                  }
                  className=' text-black dark:text-white mt-1 h-auto block w-full px-3 py-2 bg-white dark:bg-backgroundDark border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                ></textarea>
              </label>
              <button
                type='button'
                disabled={loading}
                onClick={uploadDoc}
                className=' dark:bg-black w-full pt-3 mt-3 focus:outline-none focus:ring  bg-mediumBlue text-white hover:bg-darkBlue p-2 px-3 text-sm rounded-lg '
              >
                {loading ? 'uploading' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      )}
      <NotificationProvider />
    </div>
  )
}

export default Feedback
