// import Lottie from 'lottie-web'
// import animationData from './paper.json'
import Lottie from 'react-lottie'
import animationDataPaper from './paper'
import animationDataUpload from './upload'
import animationDataPractice from './practice'
import animationDataShare from './share'
import animationDataContact from './contact_us'

const LottieAnimation = props => {
  const defaultOptions = [
    {
      loop: true,
      autoplay: true,
      animationData: animationDataPaper,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    },
    {
      loop: true,
      autoplay: true,
      animationData: animationDataPractice,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    },
    {
      loop: true,
      autoplay: true,
      animationData: animationDataUpload,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    },
    {
      loop: true,
      autoplay: true,
      animationData: animationDataContact,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    },
    {
      loop: true,
      autoplay: true,
      animationData: animationDataShare,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  ]
  return (
    <div className='w-full h-full'>
      <Lottie options={defaultOptions[props.index]} height={100} width={100} />
    </div>
  )
}

export default LottieAnimation
