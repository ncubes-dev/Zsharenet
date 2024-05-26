import React from 'react'

const About = () => {
  return (
    <div className='p-3 w-full flex flex-col mx-auto min-h-screen'>
      <h1 className='text-center font-extrabold text-darkBlue text-2xl '>
        Welcome to
        <span className='pl-2 text-mediumBlue  text-3xl '>Zim Pastpapers</span>
        <span className='font-thin'>
          , the ultimate hosting platform for past exam papers!
        </span>
      </h1>
      <div className='flex flex-col md:flex-row md:divide-x-2'>
        <div className='md:w-1/2'>
          <p className=' font-normal text-black p-2'>
            Our mission is to empower students and educators worldwide by
            providing a comprehensive and accessible repository of past exam
            papers, fostering a community of collaboration and knowledge
            sharing. In today's fast-paced academic landscape, access to quality
            resources is crucial for success. That's why we created [Your App
            Name], a platform designed to bridge the gap between students,
            educators, and institutions. Our goal is to make it easy for users
            to find, share, and learn from past exam papers, promoting a culture
            of transparency, accountability, and academic excellence.
          </p>

          <h1 className=' font-extrabold text-darkBlue text-xl p-2'>
            With
            <span className='px-2 text-mediumBlue  text-2xl '>
              Zim Pastpapers
            </span>
            , you can:
          </h1>
          <ol className=' font-thin text-darkBlue p-2'>
            <li>
              - Explore a vast library of user-uploaded past exam papers,
              covering a wide range of subjects and institutions
            </li>
            <li>
              - Search, filter, and sort papers by keyword, category, or date
            </li>
            <li> - Upload your own past exam papers to share with others</li>
            <li>
              - Connect with fellow students and educators, join study groups,
              and participate in discussions
            </li>
            <li>
              - Access exclusive resources, including study guides, tutorials,
              and expert advice
            </li>
          </ol>
        </div>
        <div className='md:w-1/2'>
          <h1 className=' font-extrabold text-darkBlue text-xl p-2'>
            Our platform is built on the principles of:
          </h1>
          <ol className='font-thin text-darkBlue p-2'>
            <li>
              - Collaboration: We believe that knowledge sharing is key to
              academic success
            </li>
            <li>
              - Accessibility: Everyone deserves equal access to quality
              resources
            </li>
            <li>
              - Innovation: We strive to stay ahead of the curve, incorporating
              cutting-edge technology and user-friendly design
            </li>
          </ol>
          <p className='font-normal text-black p-2'>
            Our team consists of dedicated professionals, passionate about
            education and committed to delivering an exceptional user
            experience. We work tirelessly to ensure the platform's stability,
            security, and continuous improvement.
          </p>
          <h1 className=' font-extrabold text-darkBlue text-xl p-2'>
            At{' '}
            <span className='px-2 text-mediumBlue  text-2xl '>
              Zim Pastpapers
            </span>
            , we value:
          </h1>
          <ol className='font-thin text-darkBlue p-2'>
            <li>
              - Collaboration: We believe that knowledge sharing is key to
              academic success
            </li>
            <li>
              - Accessibility: Everyone deserves equal access to quality
              resources
            </li>
            <li>
              - Innovation: We strive to stay ahead of the curve, incorporating
              cutting-edge technology and user-friendly design
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default About
