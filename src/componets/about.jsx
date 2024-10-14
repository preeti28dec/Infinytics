import React from 'react'

function About() {
  return (
    <div className='container mx-auto  sm:mt-15 sm:pt-15  px-6' id='about'>
      <div className='about_text  sm:mb-10 mb-6 font-bold text-5xl'>About Us </div>
      <div className='flex items-center main_about'>
        <div className='main_about_image w-[42%]  relative'> <img src='../images/about_us_img.png' alt='about us is img not loding..' /></div>
        <div className='about_text_card w-1/2 sm:pl-10'>
          <div className='text-start font-Quicksand text-[14px] sm:text-[20px] text-[#464646] '>We believe in creating an environment where innovation thrives, and every team member feels valued. We are more than just a software development company — we are a community of passionate problem-solvers, tech enthusiasts, and creative thinkers.</div>
          <div className='text-start font-Quicksand text-[14px] sm:text-[20px] text-[#464646] '>Whether it's collaborating on cutting-edge projects, exploring the latest in technology, or building solutions that make a real-world impact, life at Infinytics is dynamic, rewarding, and full of opportunities for growth. Our culture emphasizes continuous learning, teamwork, and a healthy work-life balance.</div>
        </div>
      </div>
    </div>
  )
}

export default About
