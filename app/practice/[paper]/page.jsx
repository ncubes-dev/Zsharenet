'use client'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { subjects } from '@/app/Utils/utils'
import NotificationProvider from '@/app/components/NotificationProvider'
import { toast } from 'react-toastify'
import Link from 'next/link'

const Question = () => {
  const id = useParams()
  const defaultQuestion = {
    question: 'null',
    answer: 'null',
    answers: ['null', 'null', 'null', 'null']
  }
  const paper = subjects.find(
    subject => subject.subjectName === `${id.paper.slice(1)}`
  )
  const questions = id.paper.startsWith('a') ? paper?.a_level : paper?.o_level

  const paperName = id.paper.startsWith('a')
    ? `A' level ${paper.subjectName}`
    : `O' level ${paper.subjectName}`

  let numberOfQuestion = questions?.length
  const [questionNumber, setQuestionNumber] = useState(0)
  const [score, setScore] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [showBack, setShowBack] = useState(false)
  const [choosenAnswer, setChoosenAnswer] = useState('')
  const [isCorrectAnswer, setisCorrectAnswer] = useState(true)
  const question =
    questions === null ? defaultQuestion : questions[questionNumber]
  function moveToNextQuestion () {
    if (questionNumber === numberOfQuestion - 1) {
      //You have finished all questions
      if (choosenAnswer === '') {
        setShowBack(true)
        toast.error('You have finished all questions')
      } else {
        //thus wher we can change colors
        setShowBack(false)
        setChoosenAnswer('')
        if (choosenAnswer === question.answer) {
          setShowBack(false)
          setisCorrectAnswer(true)
          setShowAnswer(true)
          toast.success('EXCELLENT!')
          setScore(score + 1)
        } else {
          setShowBack(false)
          setisCorrectAnswer(false)
          setShowAnswer(true)
          toast.error('OOPS WRONG ANSWER')
        }
      }
    } else {
      if (choosenAnswer === '') {
        setShowAnswer(false)
        setQuestionNumber(questionNumber + 1)
        setisCorrectAnswer(true)
      } else {
        //thus wher we can change colors
        setChoosenAnswer('')
        if (choosenAnswer === question.answer) {
          setisCorrectAnswer(true)
          setShowAnswer(true)
          toast.success('EXCELLENT!')
          setScore(score + 1)
        } else {
          setisCorrectAnswer(false)
          setShowAnswer(true)
          toast.error('OOPS WRONG ANSWER')
        }
      }
    }
  }

  return (
    <div className='flex flex-col md:flex-row md:container md:mx-auto w-full min-h-screen '>
      <div className='p-2 md:w-1/2'>
        <span className=' text-start font-extrabold text-darkBlue text-2xl pb-2'>
          {paperName.replace(/_/g, ' ') + '  '}
        </span>
        {showBack && (
          <span
            className={` text-start font-extrabold ${
              (score / numberOfQuestion) * 100 > 50
                ? 'text-lightBlue'
                : 'text-red-600'
            } text-2xl pb-2`}
          >
            {`Score: ${(score / numberOfQuestion) * 100}%`}
          </span>
        )}
        <h1 className=' text-start mb-2  text-xl font-bold text-black'>
          {`(${questionNumber + 1}/${numberOfQuestion}) ${question.question}`}
        </h1>
        {question.answers.map((ans, index) => {
          return (
            <div
              onClick={() => {
                if (!showAnswer) {
                  setChoosenAnswer(ans)
                }
              }}
              className={`p-2 ps-0  w-full rounded-md ${
                choosenAnswer === ans && 'bg-veryLightBlue'
              }`}
            >
              <h1 className='font-thin text-black px-2'>{ans}</h1>
            </div>
          )
        })}
      </div>
      <div className='md:w-1/2'>
        {showAnswer && (
          <div
            className={`w-full my-3 ${
              isCorrectAnswer ? 'bg-green' : 'bg-red'
            }  `}
          >
            <h1 className=' text-start  p-2 font-extrabold text-darkBlue text-2xl'>{`THE ANSWER IS`}</h1>
            <h1 className=' text-start px-2 pb-2 text-xl font-bold text-black'>
              {question.answer}
            </h1>
          </div>
        )}
        <div
          className='w-full my-3 px-2 
        '
        >
          <button
            onClick={questionNumber < numberOfQuestion && moveToNextQuestion}
            className='p-2 w-full rounded-xl bg-mediumBlue  text-white'
          >
            {choosenAnswer === '' ? 'Next' : 'Submit'}
          </button>
        </div>
        {showBack && (
          <div className='w-full my-3 px-2 '>
            <Link
              href={'/practice'}
              className='p-2 w-full block text-center rounded-xl bg-red'
            >
              Exit
            </Link>
          </div>
        )}

        <NotificationProvider />
      </div>
    </div>
  )
}

export default Question
