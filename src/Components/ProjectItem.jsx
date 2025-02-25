import React from 'react'
// import { Link } from 'react-router-dom'

const ProjectItem = ({title,framework,imgBg,link,git,button}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] transition-all hover:scale-105 ease-in-out">
    <img className='rounded-xl group-hover:opacity-10' src={imgBg} alt="" />
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
       <p className='pb-4 pt-2 text-white text-center'>{framework}</p>
       <div className="flex justify-between ">
        {/* <a href={git}><p className='text-center py-3 rounded-lg w-24 bg-white text-gray-700 text-lg hover:bg-green-700 active:bg-orange-600 hover:text-white cursor font-bold'>Code</p></a> */}
        <a href={link}><p className='text-center py-3 rounded-lg w-24 bg-white text-gray-700 text-lg hover:bg-green-700 active:bg-orange-600 hover:text-white cursor font-bold'>{button}</p></a>
       </div>
        </div>
</div>

  )
}

export default ProjectItem