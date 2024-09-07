import React from 'react'

const Button = ({text, additionalClassName}) => {
  return (
    <button className='rounded-xl primary-bg-color text-[14px] font-[700] text-white px-7 py-3'>
      {text}
    </button>
  )
}

export default Button