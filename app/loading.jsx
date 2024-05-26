'use client'
import animationData from './neat_loader'
import Lottie from 'react-lottie'
const Loading = () => {
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
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  )
}

export default Loading
