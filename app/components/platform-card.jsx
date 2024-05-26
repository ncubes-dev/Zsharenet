import Link from 'next/link'
import Image from 'next/image'
export const PlatformCard = props => {
  return (
    <div>
      <div className='flex flex-col w-full rounded-xl border-2 border-mediumBlue hover:border-veryLightBlue items-center'>
        <Link href={props.data.href}>
          <div className='flex space-x-2 items-center'>
            <Image
              src={props.data.image}
              alt={props.data.platform}
              width={40}
              height={40}
              className='p-1'
            />
            <h1 className=' hidden md:block font-bold text-mediumBlue text-lg pr-2 '>
              {props.data.platform}
            </h1>
          </div>
        </Link>
      </div>
    </div>
  )
}
