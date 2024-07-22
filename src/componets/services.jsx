import React from 'react'

function Services() {
  return (
    <div className='container mx-auto mt-20  sm:py-20 px-6' id='services'>
      <div className='text-center our_service'>
        <div className='serviced_text_card'>
          <div className='font-semibold text-[24px] text-blue-500'>Our Services</div>
          <div className='sm:my-6 my-4 font-Nunito font-bold text-[24px] sm:text-6xl text-[#1D1D1D] '>
            Perfect and Fast Movement
          </div>
          <div className=' font-Quicksand font-normal text-[14px] sm:text-[20px] text-[#464646]'>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</div>
        </div>
        </div>
        <div className='sm:my-6 ' >
          <div className=''>
            <div className='flex service_card1 justify-center gap-7 my-6'>
              <div className='icon_card child'>
                <div className=' flex justify-center'><img src='../images/icon1.png' alt='logind..' /></div>
                <div className='text-center mt-6  font-Quicksand font-bold  text-sm md:text-xl sm:text-2xl text-[#1D1D1D]'>Custom Software Development</div>
                <p className='text-[14px]'>We create bespoke software solutions tailored to your specific needs, leveraging agile methodologies and industry-leading technologies.</p>
              </div>
              <div className='icon_card child'>
                <div className=' flex justify-center'><img src='../images/icon2.png' alt='logind..' /></div>
                <div className='text-center mt-6  font-Quicksand font-bold  text-sm md:text-xl sm:text-2xl text-[#1D1D1D]'>LLM Integration</div>
                <p className='text-[14px]'>Our experts seamlessly integrate LLMs like GPT-3 and Jurassic-1 Jumbo into your software, enabling advanced capabilities like text generation, translation, question answering, and code generation.</p>
                </div>
              <div className='icon_card child'>
                <div className=' flex justify-center'><img src='../images/icon4.png' alt='logind..' /></div>
                <div className='text-center mt-6  text-sm md:text-xl sm:text-2xl font-Quicksand font-bold  text-[#1D1D1D]'>Continuous Optimization & Support</div>
                <p className='text-[14px]'>We continuously monitor and optimize your LLM integration, providing ongoing support and maintenance to ensure peak performance</p>
              </div>
            </div>
            <div className='flex service_card2 justify-center gap-7 my-6'>
              <div className='icon_card child'>
                <div className=' flex justify-center'><img src='../images/icon3.png' alt='logind..' /></div>
                <div className='text-center mt-6  font-Quicksand font-bold  text-sm md:text-xl sm:text-2xl text-[#1D1D1D]'>AI Consulting</div>
                <p className='text-[14px]'>We provide expert guidance on AI strategy, roadmap development, and model selection to ensure successful implementation and maximum ROI.</p>
              </div>
              <div className='icon_card child'>
                <div className=' flex justify-center'><img src='../images/icon4.png' alt='logind..' /></div>
                <div className='text-center mt-6  text-sm md:text-xl sm:text-2xl font-Quicksand font-bold  text-[#1D1D1D]'>Quality and Security</div>
                <p className='text-[14px]'>We ensure top-notch quality and security in our LLM development through rigorous testing, advanced encryption, and regular audits, providing reliable and secure language model solutions.</p>             
              </div>
              <div className='icon_card child'>
                <div className=' flex justify-center'><img src='../images/icon3.png' alt='logind..' /></div>
                <div className='text-center mt-6  font-Quicksand font-bold  text-sm md:text-xl sm:text-2xl text-[#1D1D1D]'>Data Engineering & Management</div>
                <p className='text-[14px]'>We continuously monitor and optimize your LLM integration, providing ongoing </p>                         
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Services
