import React from 'react'
import Button from './Button'
import IconBadge from './IconBadge'

const ContactForm = () => {
  return (
      <form className="bg-white rounded-[45px] px-6 sm:px-12  md:px-20 py-14 contact-form">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label className="block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Name
            </label>
            <input className="" id="grid-first-name" type="text" placeholder="Jane" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Email Address
            </label>
            <input className="" id="grid-last-name" type="text" placeholder="Doe" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              First Name
            </label>
            <input className="" id="grid-first-name" type="text" placeholder="Jane" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Last Name
            </label>
            <input className="" id="grid-last-name" type="text" placeholder="Doe" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3 mb-3 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Messages
            </label>
            <textarea className='block w-full text-gray-700 border-[1.2px] border-gray-300 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-950' placeholder='Enter your message'>

            </textarea>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-between items-center mt-6 gap-4 md:gap-0'>
        <div className='flex gap-2'>
        <div className='block sm:hidden lg:block'>
        <IconBadge isDarkVersion={true} icon={
                              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
          }/>
        </div>
          <div className='flex flex-col'>
          <p className='text-sm font-[700] text-[#583FBC]'>Dental 24H Emergency</p>
          <p className='font-[700]'>03 482 394 123</p>
          </div>
        </div>
          <Button text="Book appointment"/>
        </div>
    </form>
  )
}

export default ContactForm