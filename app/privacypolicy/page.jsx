const privacypolicy = () => {
  const date = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
  return (
    <div className='flex flex-col items-center justify-center p-4 h-auto min-h-screen bg-backgroundGray dark:bg-backgroundDark'>
      <div className='w-full max-w-4xl p-8 bg-white dark:bg-lightDark rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold text-center text-gray-800 mb-4'>
          Privacy Policy for Zsharenet
        </h1>
        <p className='text-center text-gray-600 mb-6'>Last updated: [{date}]</p>
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Introduction
          </h2>
          <p className='text-gray-600'>
            At Zsharenet, we value your privacy and are dedicated to protecting
            your personal information. If you have any questions or concerns
            about our policy or the handling of your personal information,
            please contact us at [ncubes1999@gmail.com].
          </p>
        </section>
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Information We Collect
          </h2>
          <p className='text-gray-600'>
            We collect personal information that you provide when you register
            on the Zsharenet app, engage with our services, or interact with us
            in any other way. This information helps us to provide a better user
            experience and improve our services.
          </p>
          <ul className='list-disc pl-5 text-gray-600'>
            <li>Email address</li>
            <li>Usage data</li>
          </ul>
        </section>
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Non-Personal Information
          </h2>
          <p className='text-gray-600'>
            We also collect non-personal information, which includes data that
            does not directly identify you. This may involve analytics about how
            you use our app and the performance of our services.
          </p>
        </section>
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>Cookies</h2>
          <p className='text-gray-600'>
            Zsharenet uses cookies to enhance your user experience. You have the
            option to disable cookies through your browser settings if you
            prefer not to use them.
          </p>
        </section>
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Changes to This Policy
          </h2>
          <p className='text-gray-600'>
            Our Privacy Policy may change from time to time. We will post any
            privacy policy changes on this page and encourage you to review it
            regularly to stay informed.
          </p>
        </section>
        <section>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Contact Us
          </h2>
          <p className='text-gray-600'>
            Should you have any questions regarding this Privacy Policy, please
            reach out to us via the contact form on our website or at
            [ncubes1999@gmail.com].
          </p>
        </section>
      </div>
    </div>
  )
}

export default privacypolicy
