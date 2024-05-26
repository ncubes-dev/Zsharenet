'use client'
import { useState, useEffect } from 'react'
import { collection, addDoc, doc, setDoc } from 'firebase/firestore'
import { Db } from '../firebase/config'
import { FEEDBACK } from '../Utils/utils'
import { Auth } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
const Feedback = () => {
  const [message, setMessage] = useState('')
  const [user] = useAuthState(Auth)
  const [admin, setAdmin] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  function messageChange (mm) {
    setMessage(mm.target.value)
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
  async function uploadDoc () {
    const timeStamp = Date.now()
    if (message > 1) {
      try {
        const d = await addDoc(collection(Db, FEEDBACK), {})
        await setDoc(doc(Db, FEEDBACK, d.id), {
          message: message,
          id: d.id,
          timeStamp: timeStamp
        })
        setMessage('')
      } catch (e) {
        setErrorMessage(e)
      }
    } else {
      setErrorMessage('Enter feedback')
    }
  }
  function timestampToHumanReadable (timestamp) {
    const date = new Date(timestamp * 1000) // Convert seconds to milliseconds
    const year = date.getFullYear()
    const month = date.getMonth() + 1 // Months are zero-based, so add 1
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    // Format the date string (adjust as needed)
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    return formattedDate
  }
  useEffect(() => {
    async function fetchData () {
      const data = await getDocuments()
      setImage(data.url)
      setAdmin(data.allowedId)
    }
    fetchData()
  }, [])
  const feedbackList = [
    {
      message: 'Great job! Your service exceeded my expectations.',
      id: 'some_unique_id_1',
      timeStamp: 1678923456789
    },
    {
      message:
        'I appreciate the prompt response and excellent customer support.',
      id: 'some_unique_id_2',
      timeStamp: 1678923456790
    },
    {
      message: 'The user interface is intuitive and easy to navigate.',
      id: 'some_unique_id_3',
      timeStamp: 1678923456791
    }
  ]

  return (
    <div className='flex flex-col w-full '>
      {user?.uid === admin ? (
        <div>
          {feedbackList.map((f, i) => {
            return (
              <ul className='divide-y-2'>
                <div className='bg-white p-2'>
                  <h1 className='text-startw-full'>{f.message}</h1>
                  <h1>{timestampToHumanReadable(f.timeStamp)}</h1>
                </div>
              </ul>
            )
          })}
        </div>
      ) : (
        <div>
          <div className='flex flex-col mt-2 pt-5  md:mt-10'>
            <div className='flex justify-center'>
              <span className='font-thin pr-3 text-3xl md:text-4xl text-center '>
                Send us
              </span>
              <span className='font-bold text-mediumBlue text-3xl md:text-4xl text-center '>
                FeedBack
              </span>
            </div>
          </div>
          <div className='container mx-auto justify-center p-2 mt-4 flex flex-col w-full '>
            <form className='p-6 bg-veryLightBlue rounded-lg shadow-lg'>
              <label class='block'>
                <span class='block text-sm font-medium text-slate-700'>
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
                  className='mt-1 h-auto block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                ></textarea>
              </label>
              <button
                type='button'
                onClick={uploadDoc}
                className='w-full pt-3 mt-3 focus:outline-none focus:ring  bg-mediumBlue text-white hover:bg-darkBlue p-2 px-3 text-sm rounded-lg '
              >
                {'Submit'}
              </button>
              {errorMessage && (
                <h1 className='text-red text-center text-lg font-extrabold'>
                  {errorMessage}!
                </h1>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Feedback
