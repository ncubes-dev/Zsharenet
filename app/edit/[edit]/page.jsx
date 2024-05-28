'use client'
import Selector from './selector'
import { TOPICS } from '../../Utils/utils'
import NotificationProvider from './NotificationProvider'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { collection, addDoc, doc, setDoc } from 'firebase/firestore'
import { Storage } from '../../firebase/config'
import { Db } from '../../firebase/config'
import { COMMUNITY } from '../../Utils/utils'
import { Input } from './input'
import { Auth } from '../../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
import TextWithShowMore from './text-with-showmore'

const EditScreen = () => {
  const id = useParams().id
  const [user] = useAuthState(Auth)
  const [loading, setLoading] = useState(false)
  const [profileProgress, setprofileProgress] = useState(0)
  const [website, setWebsite] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [category, setCategory] = useState('')
  const [youtube, setYoutube] = useState('')
  const [telegram, setTelegram] = useState('')
  const [description, setDescription] = useState('')
  const [profilePdfLink, setProfilePdfLink] = useState(null)
  const router = useRouter()

  const compulsory = [
    {
      name: 'Profile Picture',
      value: profilePdfLink
    },
    {
      name: 'Description',
      value: description
    },
    {
      name: 'Category',
      value: category
    }
  ]

  const other = [
    {
      name: 'Whatsapp',
      value: whatsapp
    },
    {
      name: 'Website',
      value: website
    },
    {
      name: 'Telegram',
      value: telegram
    },
    {
      name: 'Youtube',
      value: youtube
    }
  ]
  function handleClick () {
    const comp = compulsory.find(state => state.value === '') || 'null'
    if (comp === 'null') {
      const oth = other.find(state => state.value !== '') || 'null'
      if (oth !== 'null') {
        profileUpload()
      } else {
        toast.error(`You must have at least one link`)
      }
    } else {
      toast.error(`Enter a value for : ${comp.name}`)
    }
  }

  async function uploadDoc (url) {
    const timeStamp = Date.now()
    if (url.length > 1) {
      const d = await addDoc(collection(Db, COMMUNITY), {})
      await setDoc(doc(Db, COMMUNITY, d.id), {
        whatsapp: whatsapp,
        telegram: telegram,
        youtube: youtube,
        website: website,
        description: description,
        downloadURL: url,
        id: d.id,
        timeStamp: timeStamp,
        category: category,
        userId: user?.uid
      })
      setLoading(false)
      setprofileProgress(0)
      toast.success(`Upload Successfully`)
      //navigate to the particular category
      router.push(`/category/${category}`)
      setWhatsapp('')
      setCategory('')
      setYoutube('')
      setTelegram('')
      setDescription('')
      setWebsite('')
      setProfilePdfLink(null)
    } else {
      setLoading(false)
      toast.error(`Error occured`)
    }
  }

  const handleProfilePdfChange = event => {
    if (event.target.files && event.target.files[0]) {
      setProfilePdfLink(event.target.files[0])
    }
  }

  const profileUpload = () => {
    if (!profilePdfLink) {
      toast.error(`Choose a profile picture`)
    } else {
      setLoading(true)
      const timeStamp = Date.now()
      const profilePdfRef = ref(Storage, `profiles/profile${timeStamp}`)

      const uploadTask = uploadBytesResumable(profilePdfRef, profilePdfLink)

      uploadTask.on(
        'state_changed',

        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setprofileProgress(progress)
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
    }
  }

  return (
    <div className='flex flex-col w-full items-center'>
      <div className='flex flex-col mt-2 pt-5  md:mt-10'>
        <div className='flex flex-col justify-center'>
          <h1 className='font-bold text-mediumBlue text-3xl md:text-4xl text-center '>
            Edit Community details
          </h1>
        </div>
      </div>
      <div className='container mx-auto justify-center p-2 mt-4 flex flex-col w-full '>
        <form className='p-6 bg-veryLightBlue rounded-lg shadow-lg'>
          <label class='block '>
            <div className='w-full flex flex-col md:flex-row md:justify-between md:items-center '>
              <span class='pl-1 font-bold text-mediumBlue text-xl'>
                Profile Picture
              </span>
              <div className='w-full md:pl-12 '>
                <input
                  className='w-full'
                  type='file'
                  onChange={handleProfilePdfChange}
                  accept='image/*'
                />
              </div>
              {profileProgress > 0 && (
                <progress
                  value={profileProgress}
                  max={'100'}
                  className='m-2'
                ></progress>
              )}
            </div>
          </label>
          <label class='block '>
            <div className='w-full flex flex-col md:flex-row md:justify-between md:items-center '>
              <span class='pl-1 font-bold text-mediumBlue text-xl'>
                Category
              </span>
              <Selector
                items={TOPICS}
                value={category}
                onChange={event => {
                  setCategory(event.target.value)
                }}
              />
            </div>
          </label>
          <label class='block '>
            <div className='w-full flex flex-col md:flex-row md:justify-between md:items-center '>
              <span class='pl-1 font-bold text-mediumBlue text-xl'>
                Description
              </span>
              <textarea
                rows={5}
                value={description}
                onChange={event => {
                  setDescription(event.target.value)
                }}
                type={'text'}
                placeholder={
                  'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
                }
                className='md:ml-14 mt-1 h-auto block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
              ></textarea>
            </div>
          </label>
          <label class='block '>
            <div className='w-full flex flex-col md:flex-row md:justify-between md:items-center '>
              <span class='pl-1 font-bold text-mediumBlue text-xl'>
                WhatsApp group/channel link
                <TextWithShowMore />
              </span>

              <Input
                value={whatsapp}
                onChange={event => {
                  setWhatsapp(event.target.value)
                }}
              />
            </div>
          </label>
          <label class='block '>
            <div className='w-full flex flex-col md:flex-row md:justify-between md:items-center '>
              <span class='pl-1 font-bold text-mediumBlue text-xl'>
                Website link
              </span>
              <Input
                value={website}
                onChange={event => {
                  setWebsite(event.target.value)
                }}
              />
            </div>
          </label>
          <label class='block '>
            <div className='w-full flex flex-col md:flex-row md:justify-between md:items-center '>
              <span class='pl-1 font-bold text-mediumBlue text-xl'>
                YouTube channel link
              </span>
              <Input
                value={youtube}
                onChange={event => {
                  setYoutube(event.target.value)
                }}
              />
            </div>
          </label>
          <label class='block '>
            <div className='w-full flex flex-col md:flex-row md:justify-between md:items-center '>
              <span class='pl-1 font-bold text-mediumBlue text-xl'>
                Other community link
              </span>
              <Input
                value={telegram}
                onChange={event => {
                  setTelegram(event.target.value)
                }}
              />
            </div>
          </label>
          <NotificationProvider />

          <button
            type='button'
            disabled={loading ? true : false}
            onClick={handleClick}
            className=' focus:outline-none md:hidden mt-4 focus:ring focus:ring-darkBlue focus:bg-darkBlue bg-mediumBlue md:w-32 w-full text-white p-2 px-3 text-sm rounded-md '
          >
            {loading ? 'Uploading' : 'Upload'}
          </button>
        </form>
      </div>

      <button
        type='button'
        disabled={loading ? true : false}
        onClick={handleClick}
        className=' focus:outline-none hidden md:block focus:ring focus:ring-darkBlue focus:bg-darkBlue bg-mediumBlue md:w-32 w-full text-white p-2 px-3 text-sm rounded-md '
      >
        {loading ? 'Uploading' : 'Upload'}
      </button>
    </div>
  )
}

export default EditScreen
