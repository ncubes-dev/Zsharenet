const tsandcs = () => {
  const date = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
  return (
    <div className='p-4 m-4 h-auto overflow-y-hidden min-h-screen'>
      <h1 className='text-center font-bold text-black text-xl'>
        Terms and Conditions for this Application
      </h1>
      <p className='text-center text-black'>Last updated: ({date})</p>
      <h2 className='text-center font-bold text-black'>Introduction</h2>
      <p className='text-center text-black'>
        These Website Standard Terms and Conditions written on this webpage
        shall manage your use of this website. These Terms will be applied fully
        and affect to your use of this Website.
      </p>
      <h2 className='text-center font-bold text-black'>
        Intellectual Property Rights
      </h2>
      <p className='text-center text-black'>
        Other than the content you own and those uploaded by users, under these
        Terms, I own all the intellectual property rights and materials
        contained in this Website.
      </p>
      <h2 className='text-center font-bold text-black'>Restrictions</h2>
      <p className='text-center text-black'>
        You are specifically restricted from all of the following: publishing
        any Website material in any other media, selling, sublicensing and/or
        otherwise commercializing any Website material, publicly performing
        and/or showing any Website material, using this Website in any way that
        is or may be damaging to this Website, using this Website in any way
        that impacts user access to this Website, using this Website contrary to
        applicable laws and regulations, or in any way may cause harm to the
        Website, or to any person or business entity, engaging in any data
        mining, data harvesting, data extracting or any other similar activity
        in relation to this Website, using this Website to engage in any
        advertising or marketing.
      </p>
      <h2 className='text-center font-bold text-black'>Termination</h2>
      <p>
        I may terminate your access to the Site, without cause or notice, which
        may result in the forfeiture and destruction of all information
        associated with you. All provisions of this Agreement that by their
        nature should survive termination shall survive termination, including,
        without limitation, ownership provisions, warranty disclaimers,
        indemnity, and limitations of liability.
      </p>
      <h2 className='text-center font-bold text-black'>Links To Other Sites</h2>
      <p className='text-center text-black'>
        My Site may contain links to third-party sites that are not owned or
        controlled by me. I have no control over, and assume no responsibility
        for, the content, privacy policies, or practices of any third party
        sites or services. I strongly advise you to read the terms and
        conditions and privacy policy of any third-party site that you visit.
      </p>
      <h2 className='text-center font-bold text-black'>Governing Law</h2>
      <p className='text-center text-black'>
        This Agreement (and any further rules, polices, or guidelines
        incorporated by reference) shall be governed and construed in accordance
        with the laws of your country, without giving effect to any principles
        of conflicts of law.
      </p>
      <h2 className='text-center font-bold text-black'>
        Changes To This Agreement
      </h2>
      <p className='text-center text-black'>
        I reserve the right, at my sole discretion, to modify or replace these
        Terms and Conditions by posting the updated terms on the Site. Your
        continued use of the Site after any such changes constitutes your
        acceptance of the new Terms and Conditions.
      </p>
      <h2 className='text-center font-bold text-black'>Contact Information</h2>
      <p className='text-center text-black'>
        If you have any questions about these Terms and Conditions, please get
        in touch through the contact form on my website.
      </p>
    </div>
  )
}

export default tsandcs
