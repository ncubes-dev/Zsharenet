'use client'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
const CommunityCard = props => {
  const [image, setImage] = useState('')
  const myLoader = ({ src }) => {
    return 'https://firebasestorage.googleapis.com/v0/b/laundry-first.appspot.com/o/profiles%2Fprofile1716756140868?alt=media&token=3fb2fff8-58fd-45ff-9007-b14a619d60b0'
  }
  return (
    <div className='flex mx-auto bg-transparent my-1 w-full md:w-1/2  text-center'>
      <div className='flex flex-col bg-white shadow-lg rounded-lg m-5'>
        <div className='relative'>
          <button className='block p-2 px-3 absolute top-0 right-0'>
            <Image
              src='/close.png'
              alt='close'
              width={30}
              height={30}
              className='bg-red p-1 rounded-md'
            />
          </button>
          <Image
            src={'image'}
            loader={myLoader}
            alt='Add'
            width={1024}
            height={500}
            className=' rounded-t-lg'
          />
          <p className=' font-normal text-black p-2'>
            {props.data.description}
          </p>
          <div className='flex flex-col w-full '>
            <div className='w-full mx-auto flex flex-row'>
              <div className=' w-full p-1 flex flex-row'>
                <Link
                  href={props.data.whatsapp}
                  className='focus:outline-none focus:ring focus:ring-darkBlue pl-2
              focus:bg-darkBlue bg-green w-full text-white p-2 px-3 text-sm
              rounded-md shadow-lg mb-2'
                >
                  WhatsApp
                </Link>{' '}
              </div>
              <div className=' w-full p-1 flex flex-row'>
                <Link
                  href={props.data.telegram}
                  className='focus:outline-none focus:ring focus:ring-darkBlue pl-2
              focus:bg-darkBlue bg-lightBlue w-full text-white p-2 px-3 text-sm
              rounded-md shadow-lg mb-2'
                >
                  Telegram
                </Link>
              </div>
            </div>
            <div className='w-full mx-auto flex flex-row'>
              <div className=' w-full p-1 flex flex-row'>
                <Link
                  href={props.data.website}
                  className='focus:outline-none focus:ring focus:ring-darkBlue pl-2
              focus:bg-darkBlue bg-black w-full text-white p-2 px-3 text-sm
              rounded-md shadow-lg mb-2'
                >
                  Website
                </Link>
              </div>
              <div className=' w-full p-1 flex flex-row'>
                <Link
                  href={props.data.youtube}
                  className='focus:outline-none focus:ring focus:ring-darkBlue pl-2
              focus:bg-darkBlue bg-red w-full text-white p-2 px-3 text-sm
              rounded-md shadow-lg mb-2'
                >
                  Youtube
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityCard
