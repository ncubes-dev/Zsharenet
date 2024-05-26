'use client'
import { useState } from 'react'

const Help = () => {
  const [copySuccess, setCopySuccess] = useState('Copy to clipboard')
  let phoneNumber = '0784250787'
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber)
      setCopySuccess('Copied to clipboard!!')
    } catch (err) {
      setCopySuccess('Failed to copy text')
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Zim past exam papers',
          text: 'Download Zim past paper App',
          url: 'https://zimpastexampapers.vercel.app/'
        })
        console.log('Sharing was successful')
      } catch (error) {
        console.error('Sharing failed:', error)
      }
    } else {
      console.error('Web Share API is not supported in your browser')
    }
  }

  return (
    <div className='p-3 w-full flex flex-col mx-auto min-h-screen'>
      <h1 className='text-center font-extrabold text-darkBlue text-2xl '>
        How You Can Help Us
      </h1>
      <div className='flex flex-col md:flex-row md:divide-x-2'>
        <div className='md:w-1/2'>
          <p className=' font-normal text-black p-2'>
            We're thrilled to have you as a part of our community! Our app, is
            dedicated to making education more accessible and empowering for
            everyone. As we strive to maintain and improve our services, we rely
            on the generosity and support of users like you.
          </p>
          <h1 className=' font-extrabold text-darkBlue text-xl p-2'>
            Donations for Maintenance:
          </h1>
          <p className='font-normal text-black p-2'>
            Running and maintaining our platform requires resources, including
            server costs, development, and ongoing improvements. Your generous
            donations enable us to keep the app running smoothly and ensure that
            it remains a valuable resource for students and educators alike.
          </p>
          <h1 className=' font-extrabold text-darkBlue text-xl p-2'>
            This is the phone number for donations
          </h1>
          <div className='w-full md:px-2 p-2 px-3  '>
            <div className='w-full p-2 flex-row flex  bg-veryLightBlue  text-white text-sm rounded-md items-center'>
              <h1 className='w-full text-black text-opacity-25'>
                {phoneNumber}
              </h1>
              <button
                onClick={copyToClipboard}
                className='focus:outline-none focus:ring focus:ring-darkBlue
              focus:bg-darkBlue bg-mediumBlue w-full text-white p-2 px-3 text-sm
              rounded-md shadow-lg '
              >
                {copySuccess}
              </button>
            </div>
          </div>
        </div>
        <div className='md:w-1/2'>
          <h1 className=' font-extrabold text-darkBlue text-xl p-2'>
            Sharing to Help Others:
          </h1>
          <p className=' font-normal text-black p-2'>
            One of the most powerful ways you can support us is by spreading the
            word about our app. Whether it's sharing it with friends,
            classmates, or on social media, your efforts help more people
            discover and benefit from the wealth of educational resources
            available on our platform. By contributing through donations and
            sharing our app, you're not just supporting us – you're also helping
            to empower students around the world by providing access to past
            exam papers and valuable study materials. Thank you for being a part
            of our journey and for your continued support. Together, we can make
            a real difference in the world of education.
          </p>
          <div className='w-full md:p-3'>
            <button
              onClick={handleShare}
              className='focus:outline-none mt-4 focus:ring focus:ring-darkBlue focus:bg-darkBlue bg-mediumBlue w-full text-white p-2 px-3 text-sm rounded-md '
            >
              Share The App
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help
