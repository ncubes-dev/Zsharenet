'use client'
import UploadScreen from '../components/upload-screen'
import Authentication from '../authentication/page'
import { Auth } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'

const Upload = () => {
  const [user] = useAuthState(Auth)

  return user ? <UploadScreen /> : <Authentication />
}

export default Upload
