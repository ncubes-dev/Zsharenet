const tsandcs = () => {
  const date = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
  return (
    <div className='flex flex-col items-center justify-center p-4 h-auto min-h-screen bg-backgroundGray dark:bg-backgroundDark'>
      <div className='w-full max-w-4xl p-8 bg-white dark:bg-lightDark rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold text-center text-gray-800 mb-4'>
          Terms and Conditions for Zsharenet
        </h1>
        <p className='text-center text-gray-600 mb-6'>Last updated: [{date}]</p>
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Introduction
          </h2>
          <p className='text-gray-600'>
            These Website Standard Terms and Conditions written on this webpage
            shall manage your use of our website.
          </p>
        </section>
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Intellectual Property Rights
          </h2>
          <p className='text-gray-600'>
            Other than the content you own, under these Terms, Zsharenet and/or
            its licensors own all the intellectual property rights and materials
            contained in this Website.
          </p>
        </section>
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Restrictions
          </h2>
          <div className='bg-gray-100 p-6 rounded-lg'>
            <p className='text-gray-600 mb-3'>
              You are specifically restricted from all of the following:
            </p>
            <ul className='list-disc pl-5 text-gray-600'>
              <li>Publishing any Website material in any other media.</li>
              <li>
                Selling, sublicensing and/or otherwise commercializing any
                Website material.
              </li>
              <li>Publicly performing and/or showing any Website material.</li>
              <li>
                Using this Website in any way that is or may be damaging to this
                Website.
              </li>
              <li>
                Using this Website in any way that impacts user access to this
                Website.
              </li>
              <li>
                Using this Website contrary to applicable laws and regulations,
                or in any way may cause harm to the Website, or to any person or
                business entity.
              </li>
              <li>
                Engaging in any data mining, data harvesting, data extracting or
                any other similar activity in relation to this Website.
              </li>
              <li>
                Using this Website to engage in any advertising or marketing.
              </li>
            </ul>
          </div>
        </section>
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Termination
          </h2>
          <p className='text-gray-600'>
            Zsharenet may terminate your access to the Site, without cause or
            notice, which may result in the forfeiture and destruction of all
            information associated with your account.
          </p>
        </section>
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Links To Other Sites
          </h2>
          <p className='text-gray-600'>
            Our Site may contain links to third-party sites that are not owned
            or controlled by Zsharenet.
          </p>
        </section>
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Governing Law
          </h2>
          <p className='text-gray-600'>
            This Agreement shall be governed and construed in accordance with
            the laws of [Insert Country], without regard to its conflict of law
            provisions.
          </p>
        </section>
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Changes To This Agreement
          </h2>
          <p className='text-gray-600'>
            We reserve the right to modify these Terms at any time. Your
            continued use of the Site will be considered acceptance of our
            updated terms.
          </p>
        </section>
        <section>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Contact Information
          </h2>
          <p className='text-gray-600'>
            If you have any questions about these Terms, please contact us via
            email.
          </p>
        </section>
      </div>
    </div>
  )
}

export default tsandcs
