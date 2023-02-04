import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-green-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6fd]'>Christopher Mems</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Engineer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a Software Engineer with experience in coding languages such as CSS, HTML, JavaScript, and React. I interact with clients to gather key details so that I may use my engineering skills to turn their ideas into reality. With my passion for helping people and solving problems, Software Engineering gives me the ability to create change and be a contributor to a team in generating solutions.</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home