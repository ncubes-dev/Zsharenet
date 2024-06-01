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
          title: 'Zsharenet',
          text: 'Download Zsharenet App',
          url: 'https://zshare-net.vercel.app/'
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
    <div className='flex flex-col items-center justify-center p-4  h-auto min-h-screen bg-backgroundGray dark:bg-backgroundDark'>
      {/* // <div className='w-full max-w-4xl p-8 bg-white dark:bg-lightDark rounded-lg shadow-md'> */}
      <div className='w-full flex flex-col mx-auto min-h-screen p-4 bg-white dark:bg-lightDark rounded-lg shadow-md'>
        <h1 className='text-center font-extrabold text-darkBlue text-2xl '>
          How You Can Help Us
        </h1>
        <div className='flex flex-col md:flex-row md:divide-x-2'>
          <div className='md:w-1/2'>
            <p className=' font-normal text-black p-2'>
              We’re excited to welcome you to Zsharenet! Our platform is all
              about bringing people together, offering a space where you can
              host and join communities and channels that resonate with your
              interests. Zsharenet is designed to streamline the way you connect
              with others, ensuring that everyone can find their niche with
              ease. As we continue to grow and enhance our services, we’re
              grateful for the support and enthusiasm of our users – you make it
              all possible. Join us in creating a vibrant network of diverse
              communities, where every member can find a place to belong, share,
              and thrive.
            </p>
            <h1 className=' font-extrabold text-darkBlue text-xl p-2'>
              Donations for Maintenance:
            </h1>
            <p className='font-normal text-black p-2'>
              Running and maintaining our platform requires resources, including
              server costs, development, and ongoing improvements. Your generous
              donations enable us to keep the app running smoothly and ensure
              that it remains a valuable resource for the community and creators
              alike.
            </p>
            <h1 className=' font-extrabold text-darkBlue text-xl p-2'>
              This is the phone number for donations
            </h1>
            <div className='w-full md:px-2 p-2 px-3  '>
              <div className='w-full p-2 flex-row flex  bg-veryLightBlue  text-white text-sm rounded-md items-center'>
                <h1 className='w-full text-black dark:text-white text-opacity-25'>
                  {phoneNumber}
                </h1>
                <button
                  onClick={copyToClipboard}
                  className='focus:outline-none focus:ring focus:ring-darkBlue
              focus:bg-darkBlue dark:focus:bg-black bg-mediumBlue dark:bg-lightDark w-full text-white p-2 px-3 text-sm
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
              One of the most impactful ways you can support Zsharenet is by
              spreading the word about our platform. Whether it’s sharing with
              friends, family, or on social media, your efforts help more people
              discover and join our vibrant communities. By sharing our app,
              you’re not just supporting us – you’re also helping to connect
              individuals around the world with channels that cater to their
              interests and passions. Thank you for being a part of our journey
              and for your continued support. Together, we can create a space
              where everyone can find a community they resonate with and
              contribute to a diverse network of shared interests and
              discussions.
            </p>
            <div className='w-full md:p-3'>
              <button
                onClick={handleShare}
                className='focus:bg-darkBlue  focus:outline-none mt-4 focus:ring dark:focus:bg-black bg-mediumBlue dark:bg-veryLightBlue  w-full text-white p-2 px-3 text-sm rounded-md '
              >
                Share The App
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help
