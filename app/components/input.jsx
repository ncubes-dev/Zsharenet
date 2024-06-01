import React from 'react'

export const Input = props => {
  return (
    <div>
      <input
        type='text'
        value={props.value}
        onChange={props.onChange}
        className={` text-black dark:text-white mt-1 h-auto block w-full px-3 py-2 bg-white dark:bg-backgroundDark border ${
          props.value === '' ? 'border-red' : 'border-slate-300'
        } rounded-md text-sm shadow-sm 
    focus:outline-none focus:border-lightBlue focus:ring-1 focus:ring-lightBlue`}
      />
    </div>
  )
}
