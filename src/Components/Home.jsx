import React from 'react'
import {FaTwitter, FaGithub,FaWhatsapp,} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import Header from './img.svg'
import "./Home.css"



const MainPage = () => {
  return (
   <div id="home" className='w-full h-full text-center hide'>
    <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
      <div id='welcome' className='hover:-translate-y-4 duration-1000 transition delay-100 ease-in-out  '>
     <p  className='animate-pulse mt-32 md:mt-40 md:p-4 border-white border-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg uppercase tracking-widest text-white sm:py-2 text-sm'
     >Welcome to my Portfolio, Let's build something together</p>
     <h1 className="py-8 text-gray-700 md:py-12 ">Hi, I am Joshua Patrick, Full Stack(MERN) Developer</h1>
     <div className='sm:flex w-full'> 
      <div>
      <p className='transition-colors duration-75	text-gray-600 max-w-[70%] m-auto py-8 md:text-2xl sm:mt-12'> I’m focused on building front-end and back-end applications.
       </p>
      
<div className='flex items-center justify-between max-w-[330px] m-auto py-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-4 border-white text-white shadow-xl p-4  rounded-full'>
{/* <FaLinkedin className='border border-black p-2 hover:scale-110 ease-in rounded-full m-1' size={40}/> */}
<a href="https://github.com/AmazingJosh"><FaGithub   className='border border-white p-2 hover:scale-110 ease-in rounded-full m-1' size={40}/></a>
<a href="https://twitter.com/theamazingJosh_?t=Fd8bDkjcxRV8G1JQQQH3PQs=09"><FaTwitter className='border border-white p-2 hover:scale-105 ease-in rounded-full m-1' size={40}/></a>
<a href="https://wa.me/message/UPKYII5XJW5GH1"><FaWhatsapp className='border border-white p-2 hover:scale-105 ease-in  rounded-full m-1' size={40}/></a>
<a href="mailto:theamazingkeyz@gmail.com"><HiOutlineMail className='border border-white hover:scale-105 ease-in p-2 rounded-full m-1' size={40}/></a>
 </div>
      </div>
      <div className='sm:w-1/2  flex flex-col justify-center items-center pt-8'>
        <img id="svg" className='h-[200px] w-[300px] sm:h-[350px] sm:w-[450px] sm:flex ' src={Header} alt="" />
      </div>
     </div>

     
      <a href="/#project"><p id="project" className='border-white border-4 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-700 text-white p-4 md:mt-20 w-[90%] mx-2 '>Checkout some of my works</p></a>
      </div>
    </div>
   </div>

  )
}

export default MainPage