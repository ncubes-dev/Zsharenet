const Selector = props => {
  return (
    <div className='w-full md:ml-20'>
      <select
        onChange={props.onChange}
        aria-placeholder='select'
        value={props.value}
        className={`text-black dark:text-white dark:bg-backgroundDark mt-1 h-auto block w-full px-3 py-2 bg-white border ${
          props.value === '' ? 'border-red' : 'border-slate-300'
        } rounded-md text-sm shadow-sm 
    focus:outline-none focus:border-lightBlue focus:ring-1 focus:ring-lightBlue`}
      >
        {props.items.map((item, index) => {
          return (
            <option
              className='bg-White text-black dark:text-white'
              value={item}
            >
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Selector
