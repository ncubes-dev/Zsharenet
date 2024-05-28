import { useState } from 'react'

const TextWithShowMore = () => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className='container mx-auto my-4 p-4 bg-white shadow-lg rounded-lg'>
      <h2 className='font-bold text-sm mb-4 text-gray-800'>
        WhatsApp Link Expiration Guidelines
      </h2>
      <p
        className={`text-sm font-normal text-gray-700 mb-4 ${
          !showMore && 'line-clamp-2 text-sm font-normal'
        }`}
      >
        WhatsApp links can expire, and the expiration time varies depending on
        the type of link and the purpose of its creation. Here are some general
        guidelines:
      </p>
      {showMore && (
        <ul className='list-disc pl-5 space-y-2'>
          <li className='text-sm font-normal'>
            <strong>Group invite links:</strong> These links expire after{' '}
            <span className='font-bold text-sm '>72 hours (3 days)</span> by
            default. However, group administrators can adjust the expiration
            time to 24 hours, 72 hours, or 7 days.
          </li>
        </ul>
      )}
      <button
        type='button'
        className='text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out'
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>
      {showMore && (
        <p className='text-gray-600 italic mt-4 text-sm '>
          Keep in mind that these expiration times are subject to change, and
          WhatsApp may update them without notice.
        </p>
      )}
    </div>
  )
}

export default TextWithShowMore
