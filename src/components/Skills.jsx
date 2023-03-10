import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Express from '../assets/express.png'
import GitHub from '../assets/github.svg'
import Docker from '../assets/docker.svg'
import JavaScript from '../assets/javascript.png'
import Reactphoto from '../assets/react.png'
import MongoDB from '../assets/mongo.png'
import Node from '../assets/node.png'
import Postgresql from '../assets/postgresql.png'
import Python from '../assets/python.png'
import Django from '../assets/django.png'


function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#D0E1F9] text-black '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 text-[white] border-black'>Skills</p>
        </div>
        <div className='w-full grid grid-cols-3 sm:grid-cols-4 text-center py-8 text-lg'>
          <div className='hover:scale-110 duration-500'>
            <img src={HTML} alt="HTML icon" className='w-20 mx-auto pt-6'/>
            <p className='my-4'><strong>HTML</strong></p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src={CSS} alt="CSS icon" className='w-20 mx-auto pt-6'/>
            <p className='my-4'><strong>CSS</strong></p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src={JavaScript} alt="JavaScript icon" className='w-20 mx-auto pt-6'/>
            <p className='my-4'><strong>JavaScript</strong></p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src={Reactphoto} alt="React icon" className='w-20 mx-auto pt-6'/>
            <p className='my-4'><strong>React</strong></p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src={Python} alt="Python icon" className='w-20 mx-auto pt-6'/>
            <p className='my-4'><strong>Python</strong></p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src={Postgresql} alt="Postgresql icon" className='w-20 mx-auto pt-6'/>
            <p className='my-4'><strong>PostgreSQL</strong></p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src={Django} alt="Django icon" className='w-20 mx-auto pt-6'/>
            <p className='my-4'><strong>Django</strong></p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src={Docker} alt="Docker icon" className='w-20 mx-auto pt-6'/>
            <p className='my-4'><strong>Docker</strong></p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src={Express} alt="Express icon" className='w-20 mx-auto pt-6'/>
            <p className='my-4'><strong>Express</strong></p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src={GitHub} alt="GitHub icon" className='w-20 mx-auto pt-6'/>
            <p className='my-4'><strong>GitHub</strong></p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src={MongoDB} alt="MongoDB icon" className='w-20 mx-auto pt-6'/>
            <p className='my-4'><strong>MongoDB</strong></p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img src={Node} alt="Node icon" className='w-20 mx-auto pt-6'/>
            <p className='my-4'><strong>Node</strong></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills