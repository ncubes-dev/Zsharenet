import { PlatformCard } from '../components/platform-card'
import { platforms } from '../Utils/utils'

const Platforms = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex flex-col mt-2 pt-5'>
        <div className='flex justify-center'>
          <span className='font-thin pr-3 text-3xl md:text-4xl text-center  text-black'>
            Follow
          </span>
          <span className='font-bold text-mediumBlue text-3xl md:text-4xl text-center '>
            Me On
          </span>
        </div>
      </div>
      <div className='flex justify-center items-center p-5 space-x-4'>
        {platforms.map((link, index) => {
          return <PlatformCard data={link} />
        })}
      </div>
    </div>
  )
}

export default Platforms
