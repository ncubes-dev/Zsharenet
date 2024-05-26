'use client'
import animationData from './no_network'
import Lottie from 'react-lottie'

const Offline = () => {
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
        Network connection is needed to download this page
      </h1>
    </div>
  )
}

export default Offline
