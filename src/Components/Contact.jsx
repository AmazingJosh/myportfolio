import React from 'react'
import ContactMe from "../assets/contact.svg"
import "./contact.css"

const Contact = () => {
  return (
    <div id='contact' className='contact rounded-2xl sm:mx-8 ml-5'>
        <form method="POST" action="https://getform.io/f/c18a3d6c-03e9-40bb-aebc-d599269872fe">
        <div className='lg:flex p-4'>

            <div className='flex place-center'>
                <img id="img" src={ContactMe} alt="" />
            </div>
            <div className='w-full'>
            
            <h2 className='text-purple-500 font-bold text-[40px] mb-[30px] mx-4'>Get In Touch</h2>
                <input className='w-full outline-none py-[18px] px-[26px] rounded-[20px] bg-white  font-medium text-[18px] tracking-[0.8px] border border-white mt-0 mx-0 mb-2' type="text" placeholder='First name' />
                <input className='w-full outline-none py-[18px] px-[26px] rounded-[20px] bg-white font-medium text-[18px] tracking-[0.8px] border border-white mt-0 mx-0 mb-2' type="text" placeholder='Last Name' />
                <input className='w-full outline-none py-[18px] px-[26px] rounded-[20px] bg-white  font-medium text-[18px] tracking-[0.8px] border border-white mt-0 mx-0 mb-2' type="email" placeholder='Email Address' />
                <input className='w-full outline-none py-[18px] px-[26px] rounded-[20px] bg-white  font-medium text-[18px] tracking-[0.8px] border border-white mt-0 mx-0 mb-2' type="number" placeholder='Phone no.' />
                <textarea className='w-full outline-none py-[18px] px-[26px] rounded-[20px] bg-white font-medium text-[18px] tracking-[0.8px] border border-white mt-0 mx-0 mb-2' name="message" rows="10" placeholder='Enter your message'></textarea>
                <button className='text-white p-6 bg-gradient to-r from-purple-600 to-pink-600'>Send your message</button>
            </div>
        </div>
        </form>
        
    </div>
  )
}

export default Contact