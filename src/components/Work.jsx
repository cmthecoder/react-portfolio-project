import React from 'react'
// import TTT from '../assets/ttt.jpg'
import Flyers from '../assets/flyers.png'
import MyProps from '../assets/myprops.jpg'
import TheFit from '../assets/thefitlanding.png'
import ConnectFour from '../assets/connect-4.png'


function Work() {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#1E1F26]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#D0E1F9]'>Work</p>
          <p className='py-6'>Check out some of my work</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item */}


          <div style={{backgroundImage: `url(${MyProps})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 ml-2'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                MyProps
              </span>
              <p>myProps is a website built for property managers to easily keep track of properties that they manage</p>
              <div className='pt-8 text-center'>
                <a href="https://mypropsmanagement.netlify.app/" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>App</button>
                </a>
                <a href="https://github.com/cmthecoder/myProps-front-end.git" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${Flyers})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 ml-2'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                The Flyers
              </span>
              <p>The Flyers is a community where people who share a passion for aviation can meet and share their fun adventures or discuss changes in the world of aviation</p>
              <div className='pt-8 text-center'>
                <a href="https://the-flyers.netlify.app/" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>App</button>
                </a>
                <a href="https://github.com/cmthecoder/flyers-club-front-end" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          
          <div style={{backgroundImage: `url(${TheFit})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 ml-2'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                My Person Fitness
              </span>
              <p>A fitness app made for those who like to keep track of their workouts without having to bring along pen and paper to the gym</p>
              <div className='pt-8 text-center'>
                <a href="https://fit-for-one.netlify.app/" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>App</button>
                </a>
                <a href="https://github.com/cmthecoder/my-fitness-app-front-end" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${ConnectFour})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 ml-2'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Connect-Four
              </span>
              <p>A two-player game in which tthe first player to connect four of their circular game pieces wins</p>
              <div className='pt-8 text-center'>
                <a href="https://cmems-connect-four.netlify.app/" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>App</button>
                </a>
                <a href="https://github.com/cmthecoder/Connect-Four.git" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>


          {/* <div style={{backgroundImage: `url(${TTT})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> */}
            {/* Hover Effects */}
            {/* <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Tic-Tac-Toe
              </span>
              <div className='pt-8 text-center'>
                <a href="https://chris-mems-ttt.netlify.app/" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>App</button>
                </a>
                <a href="https://github.com/cmthecoder/ttt-weekend.git" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div> */}
          {/* </div> */}

          
        </div>
      </div>
    </div>
  )
}

export default Work