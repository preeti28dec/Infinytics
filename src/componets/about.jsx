import React from 'react'

function About() {
  return (
    <div className='container mx-auto  sm:mt-15 sm:pt-15  px-6' id='about'>
      <div className='about_text  sm:mb-10 mb-6 font-bold text-5xl'>Our Teammate </div>
      <div className='flex items-center main_about'>
        <div className='main_about_image w-[42%]  relative'> <img src='../images/about_us_img.png' alt='about us is img not loding..' /></div>
        <div className='about_text_card w-1/2 sm:pl-10'>
        <div className='text-start text-3xl font-bold'>About Us</div>
          <div className='text-start font-Quicksand text-[14px] sm:text-[20px] text-[#464646] '>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</div>
        </div>
      </div>
    </div>
  )
}

export default About
