'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { updateDoc, doc, getDoc } from 'firebase/firestore'
import { Db } from '../firebase/config'
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject
} from 'firebase/storage'
import { Storage } from '../firebase/config'
import NotificationProvider from './NotificationProvider'
import { toast } from 'react-toastify'
import { Auth } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import Link from 'next/link'

const AdvertisementSection = () => {
  const [isAdAllowed, setIsAdAllowed] = useState(true)
  const [admin, setAdmin] = useState('')
  const [progress, setProgress] = useState(0)
  const [image, setImage] = useState('')
  const [user] = useAuthState(Auth)

  async function uploadDoc (url) {
    const customAdsRef = doc(Db, 'customAds', 'customAds')
    try {
      await updateDoc(customAdsRef, {
        url: url
      })
      toast.success('File uploaded successfully')
    } catch (e) {
      toast.error(e)
    }
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
      const data = await getDocuments()
      setImage(data.url)
      setAdmin(data.allowedId)
    }
    fetchData()
  }, [])

  function handleAddClose () {
    console.log('Clicked')
    setIsAdAllowed(false)
  }

  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0])
    }
  }

  const imageUpload = () => {
    const imageRef = ref(Storage, `ads/imageAdd`)

    if (selectedImage !== null) {
      deleteObject(imageRef)
        .then(() => {
          const uploadTask = uploadBytesResumable(imageRef, selectedImage)
          uploadTask.on(
            'state_changed',
            snapshot => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              setProgress(progress)
            },
            error => {
              toast.error(error)
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                uploadDoc(downloadURL)
              })
            }
          )
        })
        .catch(error => {
          toast.error(error)
          const uploadTask = uploadBytesResumable(imageRef, selectedImage)
          uploadTask.on(
            'state_changed',
            snapshot => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              setProgress(progress)
            },
            error => {
              toast.error(error)
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                uploadDoc(downloadURL)
              })
            }
          )
        })
    } else {
      toast.error('select an image')
    }
  }
  const myLoader = ({ src }) => {
    return image
  }
  return isAdAllowed ? (
    <div>
      <NotificationProvider />
      {image !== '' && (
        <div>
          <div className='container items-center mx-auto flex flex-row p-3 justify-between'>
            <h1 className=' font-extrabold text-xl md:text-2xl text-red'>
              Advertisement
            </h1>
            <button onClick={handleAddClose} className='block p-2 px-3 '>
              <Image
                src='/close.png'
                alt='close'
                width={30}
                height={30}
                className='bg-red p-1 rounded-md'
              />
            </button>
          </div>

          <div>
            <div className='w-full container items-center mx-auto flex flex-row p-3 justify-center'>
              <div className='rounded-lg p-3'>
                <Image
                  src={'image'}
                  // src='/banner.png'
                  loader={myLoader}
                  alt='Add'
                  width={1024}
                  height={500}
                  className='rounded-lg'
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {user?.uid === admin && (
        <div className='w-full container items-center mx-auto flex flex-col md:flex-row p-3 justify-center'>
          <div className='w-full flex flex-row'>
            <input
              type='file'
              accept='image/*'
              onChange={handleImageChange}
              className='w-full  p-2'
            />
            {progress > 0 && (
              <progress value={progress} max={'100'} className='m-2'></progress>
            )}
          </div>
          <div className='w-full flex flex-col md:flex-row px-2'>
            <button
              onClick={imageUpload}
              className='focus:outline-none focus:ring focus:ring-darkBlue pl-2
              focus:bg-darkBlue bg-mediumBlue w-full text-white p-2 px-3 text-sm
              rounded-md shadow-lg mb-2'
            >
              Upload
            </button>
            <Link
              href={'/feedback'}
              className='focus:outline-none focus:ring focus:ring-darkBlue pl-2
              focus:bg-darkBlue bg-mediumBlue w-full text-white p-2 px-3 text-sm
              rounded-md shadow-lg mb-2 '
            >
              <h1 className='w-full text-center'>Feedback</h1>
            </Link>
          </div>
        </div>
      )}
    </div>
  ) : (
    <></>
  )
}

export default AdvertisementSection
