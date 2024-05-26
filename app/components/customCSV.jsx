// components/CustomSVG.js
const CustomSVG = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlns:xlink='http://www.w3.org/1999/xlink'
      width='500'
      zoomAndPan='magnify'
      viewBox='0 0 375 374.999991'
      height='500'
      preserveAspectRatio='xMidYMid meet'
      version='1.0'
    >
      <defs>
        <clipPath id='89b0a53891'>
          <path
            d='M 129 125.074219 L 262.371094 125.074219 L 262.371094 209 L 129 209 Z M 129 125.074219 '
            clip-rule='nonzero'
          />
        </clipPath>
        <clipPath id='1680f2ec6a'>
          <path
            d='M 112.371094 166 L 246 166 L 246 249.574219 L 112.371094 249.574219 Z M 112.371094 166 '
            clip-rule='nonzero'
          />
        </clipPath>
      </defs>
      <g clip-path='url(#89b0a53891)'>
        <path
          fill='#e87a00'
          d='M 221.183594 147.296875 L 186.027344 208.1875 L 214.824219 208.1875 L 262.601562 125.433594 L 129.546875 125.433594 L 129.546875 147.296875 L 221.183594 147.296875 '
          fill-opacity='1'
          fill-rule='nonzero'
        />
      </g>
      <g clip-path='url(#1680f2ec6a)'>
        <path
          fill='#000000'
          d='M 112.355469 249.566406 L 245.414062 249.566406 L 245.414062 227.703125 L 153.777344 227.703125 L 188.929688 166.808594 L 160.136719 166.808594 L 112.355469 249.566406 '
          fill-opacity='1'
          fill-rule='nonzero'
        />
      </g>
    </svg>
  )
}

export default CustomSVG
