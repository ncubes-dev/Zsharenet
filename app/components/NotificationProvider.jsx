import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const NotificationProvider = () => {
  return <ToastContainer position='bottom-center' autoClose={3000} />
}

export default NotificationProvider
