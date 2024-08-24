import React from 'react'

function Getstart() {
  return (
    <div className="container mx-auto sm:mb-20 py-20 px-6 main_getstrat flex " id='getstart'>
      <div className=' sm:max-w-[44%] max-w-[100%] text-center'>
        <div className='getstart_text text-[50px] text-[#1D1D1D] font-bold sm:my-5'>Interesting Collaboration With Us?</div>
        <div className='get_start_text text-xl text-[#464646] '>Ready to unlock the power of AI for your business? Contact us today for a free consultation and discover how Infinytics can transform your software with LLM integration.</div>
        <div className='sm:my-6 my-4'><button className='bg-[#377DFF] px-6 py-2 rounded-full text-white '><a href="mailto:info@infinytics.com">Contact us</a></button></div>
      </div>
      <div className='w-[56%] flex getstart_image'>
        <div className='blue_dots_'><img className='' src='../images/blue_dots.png' alt='loding...' /></div>
        <div className='relative left-8 top-24'><img src='../images/office1.png' alt='loding..' /></div>
        <div><img src='../images/office2.png' alt='loding..' /></div>
        <div className='dots_image'><img className='' src='../images/orange_dots.png' alt='loding...' /></div>
      </div>
    </div>
  )
}

export default Getstart
