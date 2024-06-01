'use client'
import SignIn from '../components/sign-in'

const Authentication = () => {
  return (
    <div>
      <div className='p-3 w-full flex flex-col mx-auto'>
        <h1 className='text-center font-extrabold text-black  dark:text-white text-2xl '>
          Welcome!
        </h1>
        <div className='flex flex-col md:flex-row md:divide-x-2'>
          <div className='md:w-1/2'>
            <p className=' font-normal text-black dark:text-white p-2'>
              To upload you platform, we require you to sign in to your account.
              This is to ensure that only authorized users can upload content to
              our platform, and to protect the integrity of our community.
            </p>

            <h1 className=' font-extrabold text-black dark:text-white text-xl p-2'>
              By signing in, you'll be able to:{' '}
            </h1>
            <ol className=' font-thin text-black dark:text-white p-2'>
              <li>- Upload your community to share with others</li>
              <li>- Access a vast library of user-uploaded communities</li>
              <li> - Connect with others in our community</li>
            </ol>
          </div>
          <div className='md:w-1/2'>
            <h1 className=' font-extrabold text-black dark:text-white text-xl p-2'>
              Signing in also helps us to:{' '}
            </h1>
            <ol className='font-thin text-black dark:text-white p-2'>
              <li>
                -Verify your identity and ensure that you're a legitimate user
              </li>
              <li>- Prevent spam and unwanted content from being uploaded</li>
              <li> - Provide a safe and secure environment for all users</li>
            </ol>
            <p className='font-normal text-black dark:text-white p-2'>
              If you don't have an account yet, don't worry! Creating one is
              quick and easy. Simply tap the 'Sign In' button to get started.
            </p>
          </div>
        </div>
        <SignIn />
      </div>
    </div>
  )
}

export default Authentication
