import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4  h-auto min-h-screen bg-backgroundGray dark:bg-backgroundDark'>
      <div className='w-full max-w-4xl p-8 bg-white dark:bg-lightDark rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold text-center text-gray-800 mb-4'>
          About Zsharenet
        </h1>
        <p className='text-center text-gray-600 mb-6'>
          Empowering Communities, Connecting People
        </p>
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Our Mission
          </h2>
          <p className='text-gray-600'>
            Zsharenet is dedicated to creating a digital space where communities
            thrive and connections are made effortlessly. Our mission is to
            provide a platform that empowers users to create, manage, and grow
            their own communities and channels, fostering a network of shared
            interests and meaningful interactions.
          </p>
        </section>
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Our Story
          </h2>
          <p className='text-gray-600'>
            Born from the idea that everyone should have the ability to bring
            people together, Zsharenet was created to simplify the process of
            community building. We believe in the power of unity and the
            incredible potential that lies in collective collaboration and
            support.
          </p>
        </section>
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Why Zsharenet?
          </h2>
          <p className='text-gray-600'>
            With Zsharenet, you're not just joining a platform; you're becoming
            part of a growing family that values each member's voice. Our
            user-friendly interface, advanced search capabilities, and
            personalized recommendations ensure that finding and joining
            communities is a breeze.
          </p>
        </section>
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>Join Us</h2>
          <p className='text-gray-600'>
            Whether you're looking to connect with others who share your
            passions, or you're ready to lead a community of your own, Zsharenet
            is your go-to destination. Join us on this journey and be a part of
            something bigger. Let's build connections that matter.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About
