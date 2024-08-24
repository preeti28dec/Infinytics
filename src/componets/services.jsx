import React from 'react'
function Services() {
  const services = [
    {
      color: '#eff6ff',
      imgSrc: '../images/icon1.png',
      title: 'Custom Software Development',
      description: 'We create bespoke software solutions tailored to your specific needs, leveraging agile methodologies and industry-leading technologies.'
    },
    {
      color: '#fff1f2',
      imgSrc: '../images/icon2.png',
      title: 'LLM Integration',
      description: 'Our experts seamlessly integrate LLMs like GPT-3 and Jurassic-1 Jumbo into your software, enabling advanced capabilities like text generation, translation, question answering, and code generation.'
    },
    {
      color: '#fff7ed',
      imgSrc: '../images/icon4.png',
      title: 'Continuous Optimization & Support',
      description: 'We continuously monitor and optimize your LLM integration, providing ongoing support and maintenance to ensure peak performance.'
    },
    {
      color: '#f0fdf4',
      imgSrc: '../images/icon3.png',
      title: 'AI Consulting',
      description: 'We provide expert guidance on AI strategy, roadmap development, and model selection to ensure successful implementation and maximum ROI.'
    },
    {
      color: '#fff7ed',
      imgSrc: '../images/icon4.png',
      title: 'Quality and Security',
      description: 'We ensure top-notch quality and security in our LLM development through rigorous testing, advanced encryption, and regular audits, providing reliable and secure language model solutions.'
    },
    {
      color: '#f0fdf4',
      imgSrc: '../images/icon3.png',
      title: 'Data Engineering & Management',
      description: 'We build robust data pipelines and infrastructure to fuel your LLMs and ensure data quality and security.'
    }
  ];

  return (
    <div className='container mx-auto mt-20  sm:py-20 px-6' id='services'>
      <div className='text-center our_service'>
        <div className='serviced_text_card'>
          <div className='sm:my-6 my-4 font-Nunito font-bold text-[24px] sm:text-5xl text-[#1D1D1D] '>
            Our Services
          </div>
          <div className=' font-Quicksand font-normal text-[14px] sm:text-[20px] text-[#464646]'>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</div>
        </div>
      </div>

      <div className='sm:my-6'>
        <div className='flex flex-wrap justify-center my-6'>
          {services.map((service, index) => (
            <div key={index} className='icon_card child m-4 h-[330px]' style={{ backgroundColor: service.color }}>
              <div className='flex justify-center'>
                <img src={service.imgSrc} alt={service.title} />
              </div>
              <div className='text-center mt-6 font-Quicksand font-bold text-sm md:text-xl sm:text-2xl text-[#1D1D1D]'>
                {service.title}
              </div>
              <p className='text-[14px]'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Services
