import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#283655]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#ccd6fd]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6fd]'>Christopher Mems</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Engineer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm excited about utilizing my technical skills to create innovative and user-friendly software solutions. I'm eager to work collaboratively with teams to develop and implement code, design intuitive user interfaces, and conduct thorough testing to ensure high-quality products. With a strong work ethic and a willingness to learn and grow, I'm committed to delivering solutions that exceed expectations and provide value to end-users. I seek for the opportunity to contribute my skills to a dynamic and innovative company that shares my passion for creating technology that positively impacts people's lives.</p>
        <div>
          <Link  to="work" smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4D648D] hover:border-[#D0E1F9]'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home