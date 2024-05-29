'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import NotificationProvider from './NotificationProvider'
import { toast } from 'react-toastify'
import { Auth, Db } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { doc, deleteDoc, getDoc } from 'firebase/firestore'
import { COMMUNITY } from '../Utils/utils'
import { Storage } from '../firebase/config'
import { ref, deleteObject } from 'firebase/storage'
import { useRouter } from 'next/navigation'

const CommunityCard = props => {
  const [user] = useAuthState(Auth)
  const [admin, setAdmin] = useState('')
  const router = useRouter()
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
  //need work ui update on delete does work
  async function deleteCommunity () {
    const desertRef = ref(Storage, props.data.imageName)
    deleteObject(desertRef)
      .then(() => {
        deleteDocument()
      })
      .catch(error => {
        toast.error(error)
      })
  }

  useEffect(() => {
    async function fetchData () {
      const data = await getDocuments()
      setAdmin(data.allowedId)
    }
    fetchData()
  }, [])

  const myLoader = ({ src }) => {
    return props.data.downloadURL
  }
  async function deleteDocument () {
    await deleteDoc(doc(Db, COMMUNITY, props.data.id))
    router.refresh()
  }

  async function editCommunity () {
    sessionStorage.setItem('obj', JSON.stringify(props.data))
    router.push(`/edit/${props.data.id}`)
  }

  return (
    <div className='flex mx-auto bg-transparent my-1 w-full md:w-1/2  text-center'>
      <div className='flex flex-col bg-white shadow-lg rounded-lg m-5'>
        <div className='relative'>
          {user?.uid === admin ? (
            <div className=' p-2 px-3 absolute top-0 right-0 flex flex-row'>
              <div
                className='p-2 rounded-full bg-white'
                // href={`/edit/${props.data.id}`}
              >
                <Image
                  onClick={editCommunity}
                  src='/edit.png'
                  alt='edit'
                  width={40}
                  height={40}
                  className=' p-2 rounded-full bg-white'
                />
              </div>
              <div className='p-2 rounded-full bg-white'>
                <Image
                  onClick={deleteCommunity}
                  src='/delete.png'
                  alt='delete'
                  width={40}
                  height={40}
                />{' '}
              </div>
            </div>
          ) : (
            <></>
          )}
          <Image
            src={'image'}
            loader={myLoader}
            alt='Add'
            width={1024}
            height={500}
            className='rounded-t-lg'
          />
          <p className=' font-normal text-black p-2'>
            {props.data.description}
          </p>
          <div className='flex flex-col w-full '>
            <div className='w-full mx-auto flex flex-row'>
              <div className=' w-full p-1 flex flex-row'>
                <Link
                  href={props.data.whatsapp}
                  onClick={() => {
                    if (props.data.whatsapp === '') {
                      toast.error('Unavailable')
                    }
                  }}
                  className='focus:outline-none focus:ring focus:ring-darkBlue pl-2
              focus:bg-darkBlue bg-green w-full text-white p-2 px-3 text-sm
              rounded-md shadow-lg mb-2'
                >
                  WhatsApp
                </Link>
              </div>
              <div className=' w-full p-1 flex flex-row'>
                <Link
                  href={props.data.youtube}
                  onClick={() => {
                    if (props.data.youtube === '') {
                      toast.error('Unavailable')
                    }
                  }}
                  className='focus:outline-none focus:ring focus:ring-darkBlue pl-2
              focus:bg-darkBlue bg-red w-full text-white p-2 px-3 text-sm
              rounded-md shadow-lg mb-2'
                >
                  Youtube
                </Link>
              </div>
            </div>
            <div className='w-full mx-auto flex flex-row'>
              <div className=' w-full p-1 flex flex-row'>
                <Link
                  href={props.data.website}
                  onClick={() => {
                    if (props.data.website === '') {
                      toast.error('Unavailable')
                    }
                  }}
                  className='focus:outline-none focus:ring focus:ring-darkBlue pl-2
              focus:bg-darkBlue bg-black w-full text-white p-2 px-3 text-sm
              rounded-md shadow-lg mb-2'
                >
                  Website
                </Link>
              </div>
              <div className=' w-full p-1 flex flex-row'>
                <Link
                  href={props.data.telegram}
                  onClick={() => {
                    if (props.data.telegram === '') {
                      toast.error('Unavailable')
                    }
                  }}
                  className='focus:outline-none focus:ring focus:ring-darkBlue pl-2
              focus:bg-darkBlue bg-lightBlue w-full text-white p-2 px-3 text-sm
              rounded-md shadow-lg mb-2'
                >
                  Other
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NotificationProvider />
    </div>
  )
}

export default CommunityCard
