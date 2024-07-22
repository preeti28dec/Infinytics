import React from 'react'

function About() {
  return (
    <div className='container mx-auto  sm:my-15 sm:py-15  px-6' id='about'>
      <div className='text-center text-blue-500  my-2 sm:mb-10 font-samibold text-2xl font-Quicksand '>About Us</div>
      <div className='about_text text-center sm:mb-10 mb-6 font-bold text-6xl'>Our Teammate</div>
      <div className='flex items-center main_about'>
        <div className='main_about_image w-[42%] text-center relative'> <img src='../images/about_us_img.png' alt='about us is img not loding..' /></div>
        <div className='about_text_card w-1/2 sm:pl-10'>
          <div className='font-Quicksand text-[14px] sm:text-[20px] text-[#464646] '>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</div>
          <div className='flex justify-center mt-6 '>
            <div><button className='bg-[#377DFF] sm:px-6 text-[14px] px-3 sm:py-2 py-2 rounded-full text-white '>About Us</button></div>
            <div><button className='border border-[#377DFF] sm:px-6 text-[14px] px-3 sm:py-2 py-2 rounded-full mx-6'>Our Story</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
