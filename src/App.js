import React from 'react'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
// import New from './Components/New'
import Skills from './Components/Skills'
import Work from './Components/Work'

const observer = new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
  if (entry.isIntersecting) {
    console.log(entry)
    entry.target.classList.add('show')
  }

  else{
    entry.target.classList.remove('show')
  }

});
});
const hiddenElement = document.querySelectorAll('.hide')
hiddenElement.forEach((el)=>observer.observe(el))
const App = () => {

  
  return (
    <div className=''>
    <Navbar/>
    <Home className="hide"/>
    <Skills className="hide"/>
    <Work className="hide"/>
    <Contact className="hide"/> 
    </div>
  )
}

export default App