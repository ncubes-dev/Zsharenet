'use client'
import Selector from '@/app/components/selector'
import { TOPICS } from '../../Utils/utils'
import NotificationProvider from '@/app/components/NotificationProvider'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { doc, updateDoc } from 'firebase/firestore'
import { Storage } from '../../firebase/config'
import { Db } from '../../firebase/config'
import { COMMUNITY } from '../../Utils/utils'
import { Input } from '@/app/components/input'
import { useRouter } from 'next/navigation'
import TextWithShowMore from '@/app/components/text-with-showmore'

const EditScreen = () => {
  // const community = JSON.parse(sessionStorage.getItem('obj'))

  const [community, setCommunity] = useState(null)
  const [loading, setLoading] = useState(null)
  const [profileProgress, setprofileProgress] = useState(0)
  const [website, setWebsite] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [category, setCategory] = useState('')
  const [youtube, setYoutube] = useState('')
  const [telegram, setTelegram] = useState('')
  const [description, setDescription] = useState('')
  const [profilePdfLink, setProfilePdfLink] = useState(null)
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedData = sessionStorage.getItem('obj')
      if (storedData) {
        setCommunity(JSON.parse(storedData))
        setWebsite(JSON.parse(storedData).website)
        setWhatsapp(JSON.parse(storedData).whatsapp)
        setCategory(JSON.parse(storedData).category)
        setYoutube(JSON.parse(storedData).youtube)
        setTelegram(JSON.parse(storedData).telegram)
        setDescription(JSON.parse(storedData).description)
      }
    }
  }, [])

  const compulsory = [
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
    if (url.length > 1) {
      await updateDoc(doc(Db, COMMUNITY, community.id), {
        whatsapp: whatsapp,
        downloadURL: url,
        telegram: telegram,
        youtube: youtube,
        website: website,
        description: description,
        category: category
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
      await updateDoc(doc(Db, COMMUNITY, community.id), {
        whatsapp: whatsapp,
        telegram: telegram,
        youtube: youtube,
        website: website,
        description: description,
        category: category
      })
      setLoading(false)
      setWhatsapp('')
      setCategory('')
      setYoutube('')
      setTelegram('')
      setDescription('')
      setWebsite('')
      toast.success(`Update Successfully`)
      router.push(`/category/${category}`)
    }
  }

  const handleProfilePdfChange = event => {
    if (event.target.files && event.target.files[0]) {
      setProfilePdfLink(event.target.files[0])
    }
  }

  const profileUpload = () => {
    if (!profilePdfLink) {
      uploadDoc('')
    } else {
      setLoading(true)
      const profilePdfRef = ref(Storage, community.imageName)

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
    <div>
      {community && (
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
                {loading ? 'Updating' : 'Update'}
              </button>
            </form>
          </div>

          <button
            type='button'
            disabled={loading ? true : false}
            onClick={handleClick}
            className=' focus:outline-none hidden md:block focus:ring focus:ring-darkBlue focus:bg-darkBlue bg-mediumBlue md:w-32 w-full text-white p-2 px-3 text-sm rounded-md '
          >
            {loading ? 'Updating' : 'Update'}
          </button>
        </div>
      )}
    </div>
  )
}

export default EditScreen
