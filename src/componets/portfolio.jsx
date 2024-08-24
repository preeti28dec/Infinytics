import React from 'react'

function Portfolio() {
  const chooseOption = [
    {
      color: '#fdf4ff',
      title: 'Deep Expertise',
      description: 'We possess a deep understanding of both software development and LLM technology, ensuring seamless integration and optimal results.'
    },
    {
      color: '#f0fdfa',
      title: 'Proven Track Record',
      description: 'We have a successful history of delivering impactful AI-powered solutions across diverse industries.'
    },
    {
      color: '#eef2ff',
      title: 'Agile & Collaborative',
      description: 'We work closely with our clients, adopting an agile approach to deliver solutions quickly and efficiently'
    },
    {
      color: '#fffbeb',
      title: 'Focus on Value',
      description: 'We prioritize delivering tangible business value through AI, ensuring a measurable return on your investment.'
    },
    {
      color: '#ecfeff',
      title: 'End-to-End Support',
      description: 'We provide comprehensive support throughout the entire AI journey, from initial consultation to ongoing maintenance'
    },
  ];

  return (
    <div className='container mx-auto sm:py-20 px-6' id='portfolio'>
      <div className='portfolio_text text-5xl font-bold text-center my-4'>Why Choose Infinytics? </div>
      <div className='sm:my-6'>
        <div className='flex flex-wrap justify-center my-6'>
          {chooseOption.map((service, index) => (
            <div key={index} className="icon_card child m-4 h-[200px]" style={{ backgroundColor: service.color }}>
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

export default Portfolio
