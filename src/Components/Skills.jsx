import React from 'react'

const Skills = () => {
  return (
    <div id='skills'  className='w-full p-2 hide'>
      <div className='max-w-[1240px] mx-auto justify-center h-full'>
       <p className='tracking-widest uppercase text-xl text-violet-700 flex items-center justify-center'>Skills</p>
       <h2 className='flex justify-center text-purple-800'>These are my favorite frameworks</h2>
       <div className="">
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center'>
                <div className="m-auto shadow-xl p-8 rounded-xl hover:scale-105 ease-in duration-300">
                    <img src={require('../assets/html.png')} width='64px' height='64px' alt="" />
                    <p className='flex items-center justify-center'>HTML</p>
                </div>
                <div className="shadow-xl p-8  rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                    <img src={require('../assets/css.png')} width='64px' height='64px' alt="" />
                    <p className='flex items-center justify-center'>CSS</p>
                </div>
                <div className="shadow-xl p-8  rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                    <img src={require('../assets/javascript.png')} width='64px' height='64px' alt="" />
                    <p className='items'>JavaScript</p>
                </div>
                <div className="shadow-xl p-8 rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                    <img src={require('../assets/react.png')} width='64px' height='64px' alt="" />
                    <p className='items'>React Js</p>
                </div>
                <div className="shadow-xl p-8 rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                    <img src={require('../assets/react-native.jpg')} width='64px' height='64px' alt="" />
                    <p className='items'>React native</p>
                </div>
                <div className="shadow-xl p-8  rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                    <img src={require('../assets/scss1.png')} width='64px' height='64px' alt="" />
                    <p className='items'>SCSS</p>
                </div>
                <div className="shadow-xl p-8 rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                    <img src={require('../assets/tailwind.png')} width='64px' height='64px' alt="" />
                    <p className='items'>Tailwind</p>
                </div>
               
                <div className="shadow-xl p-8 rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                    <img src={require('../assets/nextjs.png')} width='64px' height='64px' alt="" />
                    <p className='items'>Next Js</p>
                </div>
                <div className="shadow-xl p-8 rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                    <img src={require('../assets/Express.jpg')} width='64px' height='64px' alt="" />
                    <p className='items'>Express Js</p>
                </div>
                <div className="shadow-xl p-8 rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                    <img src={require('../assets/mysql.png')} width='64px' height='64px' alt="" />
                    <p className='items'>MySql</p>
                </div>
                <div className="shadow-xl p-8 rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                    <img src={require('../assets/mongodb.png')} width='64px' height='64px' alt="" />
                    <p className='items'>Mongodb</p>
                </div>
                <div className="shadow-xl p-8 rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                    <img src={require('../assets/typescript.png')} width='64px' height='64px' alt="" />
                    <p className='items'>Typescript</p>
                </div>
                 </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Skills