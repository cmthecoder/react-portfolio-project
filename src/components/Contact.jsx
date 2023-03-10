import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#283655] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/b53e6f6e-cf93-4d92-b9eb-e4c64bdcade0" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#D0E1F9] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or send me an email - christopher.mems@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#4D648D] hover:border-[#D0E1F9] px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
      </form>
    </div>
  )
}

export default Contact