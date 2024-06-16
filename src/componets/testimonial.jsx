import React from 'react'

function Testimonial() {
    return (
        <div className='container mx-auto my-12 sm:my-20 px-6'>
            <div className='font-Quicksand font-semibold text-2xl text-[#377DFF] text-center '>Testimonial</div>
            <div className='sm:flex'>
                <div className=' testimonial_dots_image dots_img'><img src='../images/blue_dots.png' alt='loding..'/></div>
                <div className='font-bold text-[#1D1D1D] text-[24px] sm:text-6xl font-Quicksand sm:text-center  sm:my-12 my-2 text-center sm:ml-36'>People Talk about us</div>
            </div>

            <div className='flex sm:gap-10 testiminial'>
                <div className='testimonial_card shadow-lg rounded-2xl max-w-[370px]  px-10 py-4 sm:px-10 sm:py-12 bg-white child '>
                    <div className='sm:flex  flex flex-col items-center gap-5'>
                        <div className=''><img src='../images/Pepople.png' width={80} alt='logo-error' /></div>
                        <div className='my-6 mx-4'>
                            <div className='text-xl font-semibold text-[#377DFF]'>Angel Rose</div>
                            <div className=' text-[#464646] text-xs font-Quicksand'>Creative Manager</div>
                        </div>
                    </div>
                    <div className=' text-[#464646] font-normal text-lg  font-Quicksand'>There are many variations passages of Lorem Ipsum majority some by words which dont look . </div>
                </div>
                <div className='testimonial_card shadow-lg rounded-2xl max-w-[370px]  px-10 py-4 sm:px-10 sm:py-12 bg-white child '>
                    <div className='sm:flex  flex flex-col items-center gap-5'>
                        <div className=''><img src='../images/Pepople.png' width={80} alt='logo-error' /></div>
                        <div className='my-6 mx-4'>
                            <div className='text-xl font-semibold text-[#377DFF]'>Angel Rose</div>
                            <div className=' text-[#464646] text-xs font-Quicksand'>Creative Manager</div>
                        </div>
                    </div>
                    <div className='text-[#464646] font-normal text-lg  font-Quicksand'>There are many variations passages of Lorem Ipsum majority some by words which dont look . </div>
                </div>
                <div className='testimonial_card shadow-lg rounded-2xl max-w-[370px]  px-10 py-4 sm:px-10 sm:py-12 bg-white child '>
                    <div className='sm:flex  flex flex-col items-center gap-5'>
                        <div className=''><img src='../images/Pepople.png' width={80} alt='logo-error' /></div>
                        <div className='my-6 mx-4'>
                            <div className='text-xl font-semibold text-[#377DFF]'>Angel Rose</div>
                            <div className=' text-[#464646] text-xs font-Quicksand'>Creative Manager</div>
                        </div>
                    </div>
                    <div className='text-[#464646] font-normal text-lg  font-Quicksand'>There are many variations passages of Lorem Ipsum majority some by words which dont look . </div>
                    <div className='testimonial_dots_image blue_dots_image'><img className='blue_dots' src='../images/blue_dots.png' alt='loding...'/></div>
                </div>
                
            </div>
        </div>
    )
}

export default Testimonial
