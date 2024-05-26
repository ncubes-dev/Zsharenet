const privacypolicy = () => {
  const date = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
  return (
    <div className='p-4 m-4 h-auto overflow-y-hidden min-h-screen'>
      <h1 className='text-center font-bold text-black'>
        Privacy Policy for this Application
      </h1>
      <p className='text-center text-black'>Last updated: ({date})</p>
      <h2 className='text-center font-bold text-black'>Personal Information</h2>
      <p className='text-center text-black'>
        I do not collect any personal information about the visitors of my
        website.
      </p>
      <h2 className='text-center font-bold text-black'>
        Non-Personal Information
      </h2>
      <p className='text-center text-black'>
        Like most website operators, I collect non-personal information of the
        sort that web browsers and servers typically make available, such as the
        browser type, language preference, referring site, and the date and time
        of each visitor request.
      </p>
      <h2 className='text-center font-bold text-black'>Cookies</h2>
      <p className='text-center text-black'>
        A cookie is a string of information that a website stores on a visitor's
        computer, and that the visitor's browser provides to the website each
        time the visitor returns. My website uses cookies to help identify and
        track visitors, their usage of the website, and their website access
        preferences. Visitors who do not wish to have cookies placed on their
        computers should set their browsers to refuse cookies before using the
        website.
      </p>
      <h2 className='text-center font-bold text-black'>
        Privacy Policy Changes
      </h2>
      <p className='text-center text-black'>
        Although most changes are likely to be minor, I may change this Privacy
        Policy from time to time, and at my sole discretion. I encourage
        visitors to frequently check this page for any changes to the Privacy
        Policy. Your continued use of this site after any change in this Privacy
        Policy will constitute your acceptance of such change.
      </p>
      <h2 className='text-center font-bold text-black'>Contact Information</h2>
      <p className='text-center text-black'>
        If you have any questions about this Privacy Policy, please get in touch
        through the contact form on my website.
      </p>
    </div>
  )
}

export default privacypolicy
