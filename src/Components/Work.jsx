import React from 'react'
import ProjectItem from './ProjectItem'

const Work = () => {
  return (
    <div id='project' className='w-full h-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='tracking-widest uppercase text-xl text-violet-700 flex items-center justify-center'>Projects</p>
       <h2 className='flex justify-center text-purple-800'>These are my some of my works</h2>
       <div className="grid md:grid-cols-2 gap-8 mt-4">
       <ProjectItem link="https://ufarmx-buyer.vercel.app" button="Demo"  title="UfarmX" framework="React Js" imgBg={require("../assets/ufarmx.png")} />
       <ProjectItem link="https://apps.apple.com/us/app/ulego/id1635356430" button="Demo" title="Ulego" framework="AppStore" imgBg={require("../assets/ulego.png")} />
       <ProjectItem link="https://play.google.com/store/apps/details?id=com.ulegoapp_app" button="Demo" title="Ulego" framework="Playstore" imgBg={require("../assets/ulego.png")} />
       <ProjectItem link="https://musicty.netlify.app" button="Demo" git="https://github.com/AmazingJosh/mymusic" title="MusicApp" framework="React Js" imgBg={require("../assets/music.png")} />
       <ProjectItem link="https://elonatech.com.ng" button="Demo" title="Elonatech" framework="React Js" imgBg={require("../assets/Elonatech.png")}/>
       <ProjectItem link="https://play.google.com/store/apps/details?id=com.ufarmx.ufarmxmobile"  title="Ufarmx" button="Demo" framework="React native" imgBg={require("../assets/ufarm.png")} />
       </div>
        </div>
        <div></div>

    </div>
  )
}

export default Work