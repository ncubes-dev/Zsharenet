'use client'
import { useState } from 'react'
import { Input } from './input'
import NotificationProvider from './NotificationProvider'
import { toast } from 'react-toastify'
import { Auth } from '../firebase/config'
import { useRouter } from 'next/navigation'

import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useAuthState
} from 'react-firebase-hooks/auth'

const SignIn = () => {
  const [loading, setloading] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(Auth)
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(Auth)
  const router = useRouter()

  const handleLoginOrSignIn = async () => {
    if (isEmpty(email) || isEmpty(password)) {
      toast.error('fill all fields')
    } else {
      if (validateEmail(email)) {
        if (password.length > 5) {
          try {
            setloading(true)
            const res = await createUserWithEmailAndPassword(email, password)
            if (res === undefined) {
              const logInRes = await signInWithEmailAndPassword(email, password)
              setloading(false)
              router.push('/upload')
            } else {
              const logInRes = await signInWithEmailAndPassword(email, password)
              setloading(false)
              router.push('/upload')
            }
          } catch (e) {
            setloading(false)
            toast.error(e)
          }
        } else {
          toast.error('password must be 6 or more letters')
        }
      } else {
        toast.error('Invalid email address')
      }
    }
  }

  function isEmpty (str) {
    return str.trim().length == 0
  }
  const [emailError, setEmailError] = useState('')

  const validateEmail = email => {
    // Regular expression for basic email validation
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const emailChange = event => {
    setEmail(event.target.value)
    if (validateEmail(event.target.value)) {
      setEmailError('')
    } else {
      setEmailError('Enter a valid email address')
    }
  }

  return (
    <div className='flex flex-col w-full items-center'>
      <div className='container mx-auto justify-center p-2 mt-4 flex flex-col w-full '>
        <form className='p-6 bg-veryLightBlue rounded-lg shadow-lg'>
          <label className='block'>
            <span className='block text-sm font-medium text-slate-700'>
              Email
            </span>
            <Input
              text={'email'}
              placeholder={'example@gmail.com'}
              onChange={emailChange}
              value={email}
            />
            {emailError && <p className='text-red'>{emailError}</p>}
          </label>
          <label className='block'>
            <span className='block text-sm font-medium text-slate-700'>
              Password
            </span>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='mt-1 h-auto block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
              placeholder='Password must have 6 or characters'
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <NotificationProvider />

          <button
            type='button'
            onClick={handleLoginOrSignIn}
            className='text-white mt-3 h-auto block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm bg-mediumBlue focus:bg-darkBlue'
          >
            {!loading ? 'SignIn' : 'Loading'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
