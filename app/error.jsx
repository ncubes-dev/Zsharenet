'use client'
import Lottie from 'react-lottie'
import animationData from './no_network'

const Error = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div className='w-full h-full inset-0'>
      <Lottie options={defaultOptions} height={200} width={200} />
      <h1 className='text-red text-center font-extrabold text-xl mx-3'>
        An Error Occured
      </h1>
    </div>
  )
}

export default Error
