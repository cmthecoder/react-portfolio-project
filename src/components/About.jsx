import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#4D648D] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-green-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Chris, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt fugit aliquid pariatur illum, quaerat a sunt, vero ipsum facere ad error, obcaecati consequuntur voluptatum corporis inventore cupiditate recusandae reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About