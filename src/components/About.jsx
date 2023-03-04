import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#4D648D] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#1E1F26]'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-justify'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Chris, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p className='sm:pt-1'>
            As a software engineer, I am passionate about designing and developing innovative solutions to complex problems. I love the thrill of creating something new and seeing it come to life through code.</p><br />
            <p>For me, landing a job in the software engineering field is not just about finding a paycheck - it's about finding a community of like-minded individuals who share my passion for technology and continuous learning.</p><br />
            <p>I am excited to join a team that values my contributions and provides opportunities for me to grow and develop my skills. I want to work in an environment that fosters creativity and collaboration, where I can learn from my colleagues and challenge myself to become a better engineer.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About