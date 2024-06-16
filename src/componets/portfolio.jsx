import React from 'react'

function Portfolio() {
  return (
    <div className='container mx-auto sm:py-20 px-6' id='portfolio'>
      <div className='text-center text-blue-500 text-2xl font-semibold'>Our Portfolio</div>
      <div className='portfolio_text text-7xl font-bold text-center my-4'>What do we do </div>
      <div className='flex justify-between'>
      <div className='  text-center font-normal text-[14px] sm:text-2xl max-w-[800px] mx-auto text-[#464646] sm:my-16 my-4 font-Quicksand'>all projects that we have already done , proven can help to use more comfortable, then can used by client from our business</div>
      <div className='portfolio_dots_image dots_img'><img src='../images/dots_img.png' alt='loding..'/></div>
      </div>
      

      <div className='portfolio flex items-center sm:gap-16 text-center'>
        <div className='images '><img className='' src='../images/portfolio1.png' alt='loding image....' /><span className='relative bottom-12  text-[#fff] font-bold text-2xl'>Design Byte App</span> </div>
        <div className='py-1 images sm:w-[100%]'><img className='' src='../images/portfolio2.png' alt='loding image....' /><span className='relative bottom-12  text-[#fff] font-bold text-2xl'>Cloud App</span></div>
        <div className=' images '><img src='../images/portfolio3.png' alt='loding image....' /><span className='relative bottom-12 text-[#fff] font-bold text-2xl'>Design Furniture App</span></div>
      </div>

      <div className='text-center'>      
       <button className='border border-blue-500 py-2 px-8 rounded-full' id='portfolio'> <a className='text-blue-500'>See All Portfolio</a></button>
      </div>
    </div>
  )
}

export default Portfolio
